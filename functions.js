function verifUrl(tab) {
	console.log(tab);
	if (!tab.url) return false;
	const isKataUrl = 'https://www.twitch.tv/serious_mk' === tab.url;
	return isKataUrl;
}

function changeIcon(validUrl) {
	const iconPath = validUrl
		? '/assets/images/cw.png'
		: '/assets/images/cw-b.png';
	chrome.action.setIcon({ path: iconPath });
}

export { verifUrl, changeIcon };
