
//Q  I'd like to change the chrome extension to, when clicked, open a dialog that lets the user toggle on and off the extensions functionality.
//A: I think you can do that by adding a popup.html file and then adding a popup key to the manifest.json file.
//A: https://developer.chrome.com/docs/extensions/mv3/user_interface/#popups


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
