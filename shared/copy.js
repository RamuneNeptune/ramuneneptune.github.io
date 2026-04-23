const copyButtons = document.querySelectorAll("[data-copy-text]");

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const fallback = document.createElement("textarea");
  fallback.value = text;
  fallback.setAttribute("readonly", "");
  fallback.style.position = "absolute";
  fallback.style.left = "-9999px";
  document.body.appendChild(fallback);
  fallback.select();
  document.execCommand("copy");
  document.body.removeChild(fallback);
}

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const label = button.querySelector("[data-copy-label-target]") || button.querySelector(".surface-link-label") || button.querySelector(".pill-label");
    const originalLabel = button.dataset.copyLabel || (label ? label.textContent : "");

    try {
      await copyText(button.dataset.copyText || originalLabel);

      if (label) {
        label.textContent = "Copied!";
      }
    } catch {
      if (label) {
        label.textContent = "Failed to copy";
      }
    }

    window.clearTimeout(button.copyTimeoutId);
    button.copyTimeoutId = window.setTimeout(() => {
      if (label) {
        label.textContent = originalLabel;
      }
    }, 1200);
  });
});