const SITE_GUIDS_URL = "../GUIDs.json";
const DEFAULT_UPLOAD_TITLE = "Click here to pick a JSON file";

const fileInput = document.querySelector("#guid-file");
const uploadTitle = document.querySelector(".upload-title");
const statusCopy = document.querySelector("#status-copy");
const resultBlock = document.querySelector("#result-block");
const copyButton = document.querySelector("#copy-button");
const saveButton = document.querySelector("#save-button");
const clearButton = document.querySelector("#clear-button");
const actionButtons = [copyButton, saveButton, clearButton];

let resultText = "";

copyButton.addEventListener("click", handleCopyClick);
fileInput.addEventListener("change", handleFileChange);
saveButton.addEventListener("click", handleSaveClick);
clearButton.addEventListener("click", handleClearClick);

async function handleCopyClick() {
  if (!resultText) {
    return;
  }

  pulseActionButton(copyButton);

  try {
    await navigator.clipboard.writeText(resultText);
    statusCopy.textContent = "Copied.";
  } catch {
    statusCopy.textContent = "Copy failed.";
  }
}

async function handleFileChange() {
  const file = fileInput.files?.[0];

  if (!file) {
    return;
  }

  uploadTitle.textContent = file.name;
  statusCopy.textContent = "Reading your file...";
  resetResult();

  try {
    const [uploadedJson, siteGuids] = await Promise.all([
      file.text(),
      loadSiteGuids()
    ]);
    const uploadedGuids = JSON.parse(uploadedJson);

    if (!uploadedGuids || typeof uploadedGuids !== "object" || Array.isArray(uploadedGuids)) {
      throw new Error("Invalid JSON uploaded.");
    }

    const missingGuids = {};

    for (const [guid, value] of Object.entries(uploadedGuids)) {
      if (!Object.prototype.hasOwnProperty.call(siteGuids, guid)) {
        missingGuids[guid] = value;
      }
    }

    const missingCount = Object.keys(missingGuids).length;

    if (missingCount === 0) {
      clearButton.disabled = false;
      statusCopy.textContent = "Found 0 missing GUIDs.";
      return;
    }

    resultText = JSON.stringify(missingGuids, null, 2);
    resultBlock.textContent = resultText;
    setResultActionsEnabled(true);
    statusCopy.textContent = `Found ${missingCount} missing GUID${missingCount === 1 ? "" : "s"}.`;
  } catch (error) {
    resetResult();
    statusCopy.textContent = error instanceof Error ? error.message : "Couldn't read that JSON file.";
  }
}

function handleSaveClick() {
  if (!resultText) {
    return;
  }

  pulseActionButton(saveButton);

  const blob = new Blob([resultText], { type: "application/json" });
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = "GUIDs-missing.json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(objectUrl);
  statusCopy.textContent = "Saved GUIDs-missing.json.";
}

function handleClearClick() {
  pulseActionButton(clearButton);
  fileInput.value = "";
  uploadTitle.textContent = DEFAULT_UPLOAD_TITLE;
  statusCopy.textContent = "Waiting for a JSON file.";
  resetResult();
}

async function loadSiteGuids() {
  const response = await fetch(SITE_GUIDS_URL, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Couldn't load the site GUIDs.");
  }

  const data = await response.json();

  if (!data || typeof data !== "object" || Array.isArray(data)) {
    throw new Error("Couldn't load the site GUIDs.");
  }

  return data;
}

function resetResult() {
  resultText = "";
  resultBlock.textContent = "{}";
  setResultActionsEnabled(false);
}

function setResultActionsEnabled(enabled) {
  for (const button of actionButtons) {
    button.disabled = !enabled;
  }
}

function pulseActionButton(button) {
  button.classList.remove("action-pressed");
  void button.offsetWidth;
  button.classList.add("action-pressed");
  window.setTimeout(function () {
    button.classList.remove("action-pressed");
  }, 90);
}