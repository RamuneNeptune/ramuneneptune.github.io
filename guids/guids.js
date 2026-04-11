/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const GUIDS_URL = "GUIDs.json";
const GUIDS_HISTORY_URL = "guids-history.json";

const totalCount = document.querySelector("#total-count");
const linkedCount = document.querySelector("#linked-count");
const unlinkedCount = document.querySelector("#unlinked-count");
const naCount = document.querySelector("#na-count");
const lastUpdated = document.querySelector("#last-updated");
const searchInput = document.querySelector("#guid-search");
const filterButtons = document.querySelectorAll(".filter-button");
const modeButtons = document.querySelectorAll(".mode-button");
const searchSummary = document.querySelector("#search-summary");
const guidList = document.querySelector("#guid-list");
const historyList = document.querySelector("#history-list");

let guidEntries = [];
let currentFilter = "all";
let currentRenderMode = "normal";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

searchInput.addEventListener("input", renderGuidList);

for (const button of filterButtons) {
  button.addEventListener("click", function () {
    currentFilter = button.dataset.filter;
    updateFilterButtons();
    renderGuidList();
  });
}

for (const button of modeButtons) {
  button.addEventListener("click", function () {
    currentRenderMode = button.dataset.mode;
    updateModeButtons();
    updateRenderMode();
  });
}

loadGuidList();
loadRecentHistory();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function loadGuidList() {
  try {
    const response = await fetch(GUIDS_URL, { cache: "no-store" });

    if (!response.ok) {
      throw new Error("Could not load GUIDs.");
    }

    const data = await response.json();

    guidEntries = [];

    for (const [guid, url] of Object.entries(data)) {
      guidEntries.push({
        guid: guid,
        url: typeof url === "string" ? url : ""
      });
    }

    guidEntries.sort(function (a, b) {
      return a.guid.localeCompare(b.guid, undefined, { sensitivity: "base" });
    });

    let linkedEntries = 0;
    let unlinkedEntries = 0;
    let naEntries = 0;

    for (const entry of guidEntries) {
      if (getEntryType(entry) === "linked") {
        linkedEntries++;
      } else if (getEntryType(entry) === "unlinked") {
        unlinkedEntries++;
      } else if (getEntryType(entry) === "na") {
        naEntries++;
      }
    }

    totalCount.textContent = String(guidEntries.length);
    linkedCount.textContent = String(linkedEntries);
    unlinkedCount.textContent = String(unlinkedEntries);
    naCount.textContent = String(naEntries);

    renderGuidList();
  } catch (error) {
    const message = getGuidLoadFailureMessage();

    totalCount.textContent = "-";
    linkedCount.textContent = "-";
    unlinkedCount.textContent = "-";
    naCount.textContent = "-";
    searchSummary.textContent = message;
    renderEmptyState(guidList, message);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderGuidList() {
  if (guidEntries.length === 0) {
    searchSummary.textContent = "Showing 0 entries.";
    renderEmptyState(guidList, "No GUIDs are currently listed.");
    updateRenderMode();
    return;
  }

  const searchText = searchInput.value.trim();
  const searchTextLower = searchText.toLowerCase();
  const filteredEntries = [];

  for (const entry of guidEntries) {
    if (!entryMatchesFilter(entry)) {
      continue;
    }

    if (searchTextLower !== "" && !entry.guid.toLowerCase().includes(searchTextLower)) {
      continue;
    }

    filteredEntries.push(entry);
  }

  if (searchText !== "") {
    searchSummary.textContent = `Showing ${filteredEntries.length} ${getFilterLabel(currentFilter)} entries for "${searchText}".`;
  } else if (currentFilter === "all") {
    searchSummary.textContent = `Showing all ${guidEntries.length} entries.`;
  } else {
    searchSummary.textContent = `Showing ${filteredEntries.length} ${getFilterLabel(currentFilter)} entries.`;
  }

  if (filteredEntries.length === 0) {
    renderEmptyState(guidList, "No GUIDs matched that search.");
    updateRenderMode();
    return;
  }

  const fragment = document.createDocumentFragment();

  for (const entry of filteredEntries) {
    const item = document.createElement("article");
    item.className = "guid-item";

    const copy = document.createElement("div");
    copy.className = "guid-copy";

    const name = document.createElement("h3");
    name.className = "guid-name";
    appendHighlightedGuid(name, entry.guid, searchText);

    const urlText = document.createElement("p");
    urlText.className = "guid-url";
    urlText.textContent = getEntryUrlText(entry);

    const actions = document.createElement("div");
    actions.className = "guid-actions";

    const status = document.createElement("span");
    status.className = `status-pill ${getEntryType(entry)}`;
    status.textContent = getEntryStatusText(entry);

    copy.appendChild(name);
    copy.appendChild(urlText);
    actions.appendChild(status);

    if (getEntryType(entry) === "linked") {
      actions.appendChild(makeOpenLink(entry.url));
    }

    item.appendChild(copy);
    item.appendChild(actions);
    fragment.appendChild(item);
  }

  guidList.replaceChildren(fragment);
  updateRenderMode();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function loadRecentHistory() {
  try {
    const response = await fetch(GUIDS_HISTORY_URL, { cache: "no-store" });

    if (!response.ok) {
      throw new Error("Could not load GUID history.");
    }

    const historyEntries = await response.json();

    if (!Array.isArray(historyEntries) || historyEntries.length === 0) {
      lastUpdated.textContent = "Unavailable";
      renderEmptyState(historyList, "Recent changes will appear once guids-history.json has data.");
      return;
    }

    lastUpdated.textContent = formatDateTime(historyEntries[0].date);
    renderHistoryList(historyEntries);
  } catch (error) {
    lastUpdated.textContent = "Unavailable";
    renderEmptyState(historyList, "Recent changes could not be loaded right now.");
  }
}

function renderHistoryList(entries) {
  const fragment = document.createDocumentFragment();

  for (const entry of entries) {
    const historyCard = document.createElement("article");
    historyCard.className = "history-item";

    const head = document.createElement("div");
    head.className = "history-head";

    const info = document.createElement("div");

    const title = document.createElement("h3");
    title.className = "history-title";

    const titleLink = document.createElement("a");
    titleLink.className = "commit-link";
    titleLink.href = entry.url;
    titleLink.target = "_blank";
    titleLink.rel = "noopener noreferrer";
    titleLink.textContent = entry.message;

    const meta = document.createElement("p");
    meta.className = "history-meta";
    meta.textContent = `${formatDateTime(entry.date)}${entry.author ? ` | ${entry.author}` : ""}`;

    title.appendChild(titleLink);
    info.appendChild(title);
    info.appendChild(meta);
    head.appendChild(info);
    historyCard.appendChild(head);

    if (entry.changeTags.length > 0) {
      const changeList = document.createElement("div");
      changeList.className = "change-list";

      for (const tag of entry.changeTags) {
        const chip = document.createElement("span");
        chip.className = `change-tag ${tag.type}`;
        chip.textContent = tag.label;
        changeList.appendChild(chip);
      }

      historyCard.appendChild(changeList);
    } else {
      const note = document.createElement("p");
      note.className = "history-note";
      note.textContent = "This commit touched GUIDs.json, but GitHub did not expose a small per-entry diff for it.";
      historyCard.appendChild(note);
    }

    fragment.appendChild(historyCard);
  }

  historyList.replaceChildren(fragment);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function makeOpenLink(url) {
  const openLink = document.createElement("a");
  openLink.className = "entry-button";
  openLink.href = url;
  openLink.target = "_blank";
  openLink.rel = "noopener noreferrer";

  const openLabel = document.createElement("span");
  openLabel.textContent = "Open";

  openLink.appendChild(openLabel);
  openLink.appendChild(makeOpenIcon());

  return openLink;
}

function makeOpenIcon() {
  const openIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  openIcon.setAttribute("class", "entry-icon");
  openIcon.setAttribute("viewBox", "0 0 24 24");
  openIcon.setAttribute("aria-hidden", "true");
  openIcon.setAttribute("focusable", "false");

  const iconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  iconPath.setAttribute("d", "M15 7h3a5 5 0 0 1 0 10h-3m-6 0H6a5 5 0 0 1 0-10h3");

  const iconLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  iconLine.setAttribute("x1", "8");
  iconLine.setAttribute("y1", "12");
  iconLine.setAttribute("x2", "16");
  iconLine.setAttribute("y2", "12");

  openIcon.appendChild(iconPath);
  openIcon.appendChild(iconLine);

  return openIcon;
}

function updateFilterButtons() {
  for (const button of filterButtons) {
    button.classList.toggle("active", button.dataset.filter === currentFilter);
  }
}

function updateModeButtons() {
  for (const button of modeButtons) {
    button.classList.toggle("active", button.dataset.mode === currentRenderMode);
  }
}

function updateRenderMode() {
  guidList.classList.toggle("compact-mode", currentRenderMode === "compact");
}

function entryMatchesFilter(entry) {
  if (currentFilter === "linked") {
    return getEntryType(entry) === "linked";
  }

  if (currentFilter === "unlinked") {
    return getEntryType(entry) === "unlinked";
  }

  if (currentFilter === "na") {
    return getEntryType(entry) === "na";
  }

  return true;
}

function getFilterLabel(filter) {
  if (filter === "linked") {
    return "linked";
  }

  if (filter === "unlinked") {
    return "unlinked";
  }

  if (filter === "na") {
    return "N/A";
  }

  return "all";
}

function getEntryType(entry) {
  if (typeof entry.url !== "string" || entry.url === "") {
    return "unlinked";
  }

  if (entry.url.trim().toUpperCase() === "N/A") {
    return "na";
  }

  return "linked";
}

function getEntryStatusText(entry) {
  if (getEntryType(entry) === "linked") {
    return "Linked";
  }

  if (getEntryType(entry) === "na") {
    return "N/A";
  }

  return "Unlinked";
}

function getEntryUrlText(entry) {
  if (getEntryType(entry) === "na") {
    return "Potentially off-Nexus, bundled (in another mod), private, etc.";
  }

  if (getEntryType(entry) === "unlinked") {
    return "No linked page yet.";
  }

  return entry.url;
}

function renderEmptyState(container, message) {
  const text = document.createElement("p");
  text.className = "empty-state";
  text.textContent = message;
  container.replaceChildren(text);
}

function appendHighlightedGuid(container, text, searchText) {
  container.textContent = "";

  if (searchText === "") {
    container.textContent = text;
    return;
  }

  const textLower = text.toLowerCase();
  const searchTextLower = searchText.toLowerCase();
  let currentIndex = 0;
  let matchIndex = textLower.indexOf(searchTextLower);

  if (matchIndex === -1) {
    container.textContent = text;
    return;
  }

  while (matchIndex !== -1) {
    if (matchIndex > currentIndex) {
      container.appendChild(document.createTextNode(text.slice(currentIndex, matchIndex)));
    }

    const mark = document.createElement("mark");
    mark.textContent = text.slice(matchIndex, matchIndex + searchText.length);
    container.appendChild(mark);

    currentIndex = matchIndex + searchText.length;
    matchIndex = textLower.indexOf(searchTextLower, currentIndex);
  }

  if (currentIndex < text.length) {
    container.appendChild(document.createTextNode(text.slice(currentIndex)));
  }
}

function getGuidLoadFailureMessage() {
  return "GUIDs.json could not be loaded right now.";
}

function formatDateTime(value) {
  if (!value) {
    return "Unavailable";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Unavailable";
  }

  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
