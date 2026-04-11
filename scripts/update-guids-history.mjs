import { writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT_PATH = resolve(ROOT, "guids-history.json");
const HISTORY_LIMIT = 20;
const CHANGE_TAG_LIMIT = 6;

const token = process.env.GITHUB_TOKEN || process.env.GH_PAT;
const repository = process.env.GITHUB_REPOSITORY || "RamuneNeptune/ramuneneptune.github.io";

if (!token) {
  throw new Error("Missing GITHUB_TOKEN or GH_PAT.");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const commits = await fetchJson(
  `https://api.github.com/repos/${repository}/commits?path=GUIDs.json&per_page=${HISTORY_LIMIT}`
);

const historyEntries = await Promise.all(commits.map(loadCommitDetail));
const visibleHistoryEntries = historyEntries.filter(Boolean);

await writeFile(OUTPUT_PATH, `${JSON.stringify(visibleHistoryEntries, null, 2)}\n`, "utf8");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function loadCommitDetail(commitSummary) {
  try {
    const detail = await fetchJson(`https://api.github.com/repos/${repository}/commits/${commitSummary.sha}`);
    let guidFile = null;

    if (Array.isArray(detail.files)) {
      guidFile = detail.files.find(function (file) {
        return file.filename === "GUIDs.json";
      });
    }

    return {
      url: detail.html_url || commitSummary.html_url || "#",
      message: getCommitTitle(detail.commit && detail.commit.message),
      date: detail.commit && detail.commit.author ? detail.commit.author.date : "",
      author: detail.commit && detail.commit.author ? detail.commit.author.name : "",
      changeTags: summarizePatch(guidFile && guidFile.patch)
    };
  } catch (error) {
    return {
      url: commitSummary.html_url || "#",
      message: getCommitTitle(commitSummary.commit && commitSummary.commit.message),
      date: commitSummary.commit && commitSummary.commit.author ? commitSummary.commit.author.date : "",
      author: commitSummary.commit && commitSummary.commit.author ? commitSummary.commit.author.name : "",
      changeTags: []
    };
  }
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "User-Agent": "ramuneneptune-guids-history",
      "X-GitHub-Api-Version": "2022-11-28"
    }
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub API request failed (${response.status}): ${body}`);
  }

  return response.json();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function summarizePatch(patch) {
  if (!patch) {
    return [];
  }

  const added = new Map();
  const removed = new Map();

  for (const line of patch.split("\n")) {
    if (line.startsWith("+++") || line.startsWith("---")) {
      continue;
    }

    if (!line.startsWith("+") && !line.startsWith("-")) {
      continue;
    }

    const match = line.match(/^[+-]\s*"([^"]+)":\s*"([^"]*)"/);

    if (!match) {
      continue;
    }

    const guid = match[1];
    const value = match[2];

    if (line.startsWith("+")) {
      added.set(guid, value);
    } else {
      removed.set(guid, value);
    }
  }

  const changeTags = [];

  for (const [guid, value] of added.entries()) {
    if (removed.has(guid)) {
      if (removed.get(guid) !== value) {
        changeTags.push({ type: "updated", label: `~ ${guid}` });
      }

      removed.delete(guid);
    } else {
      changeTags.push({ type: "added", label: `+ ${guid}` });
    }
  }

  for (const guid of removed.keys()) {
    changeTags.push({ type: "removed", label: `- ${guid}` });
  }

  if (changeTags.length <= CHANGE_TAG_LIMIT) {
    return changeTags;
  }

  const visibleTags = changeTags.slice(0, CHANGE_TAG_LIMIT);
  visibleTags.push({
    type: "more",
    label: `+${changeTags.length - CHANGE_TAG_LIMIT} more`
  });

  return visibleTags;
}

function getCommitTitle(message) {
  if (!message) {
    return "GUIDs.json updated";
  }

  return message.split("\n")[0].trim() || "GUIDs.json updated";
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
