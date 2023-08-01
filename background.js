import { verifUrl, changeIcon } from './functions.js';

let TestPage = false;
let previousUrl = null;

function fullCtrl(tab) {
	TestPage = verifUrl(tab);
	changeIcon(TestPage);
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (changeInfo.status === 'complete') {
		const currentUrl = tab.url;
		if (currentUrl !== previousUrl) {
			previousUrl = currentUrl;
			fullCtrl(tab);
		}
	}
});

chrome.tabs.onActivated.addListener((activeInfo) => {
	chrome.tabs.get(activeInfo.tabId, (tab) => {
		fullCtrl(tab);
	});
});
