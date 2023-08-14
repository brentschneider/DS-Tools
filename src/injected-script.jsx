// @ts-check
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

console.log("🤖 USWDS DevTools is running");

const rootId = "uswds-devtools-root";

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

render();
