// @ts-check
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

console.log("🤖 USWDS DevTools is running");

const rootId = "uswds-devtools-root";
render();

// Single-page apps don't always trigger a page reload, so we need to
// periodically check if the URL has changed.
let currentUrl = window.location.href;
setInterval(checkUrlChange, 1000);

function render() {
  // Clear the existing HTML content
  const existingRoot = document.getElementById(rootId);
  if (existingRoot) {
    existingRoot.remove();
  }

  const rootDiv = document.createElement("div");
  rootDiv.id = rootId;
  document.body.appendChild(rootDiv);

  // Render your React component instead
  const root = createRoot(rootDiv);
  root.render(<App />);
}

function checkUrlChange() {
  if (window.location.href !== currentUrl) {
    currentUrl = window.location.href;
    render();
  }
}
