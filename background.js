// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// // while (true) {
// // }
// getPage();
// await sleep(3000);
// getPage();

chrome.runtime.onInstalled.addListener(() => {
    console.log("Creating alarm")
    chrome.alarms.create("RVE_keepAlive", {delayInMinutes: 1, periodInMinutes: 1});
});

chrome.alarms.onAlarm.addListener(function() {
    console.log(new Date() + " Fetching");
    fetch("https://bur.regione.veneto.it/");
});