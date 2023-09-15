// @ts-check

/*    The injected script is a single file that is injected into the page. It is responsible for rendering the UI and
      for listening to events from the page. It is also responsible for sending messages to the background script.
      The injected script is injected into the page when the extension is first installed and when the page is refreshed. 
      The injected script is also injected into the page when the user navigates to a new page.
      This is done by listening to the `history.pushState` event.
      The injected script is also responsible for listening to the `message` event from the background script.
      This is how the injected script receives messages from the background script.
      The injected script is also responsible for sending messages to the background script.
      This is done by calling the `chrome.runtime.sendMessage` function. */



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
