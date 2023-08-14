chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id) return;

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["dist/injected-script.js"],
  });

  chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    files: ["src/styles.css"],
  });
});
