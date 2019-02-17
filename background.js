chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        let replacements = [["https://www.hs.fi/", "https://login.libproxy.aalto.fi/login?url=https://www.hs.fi/"]];
        let newUrl = details.url;
        replacements.forEach(e => {if (newUrl.indexOf(e[0]) == 0) { newUrl = newUrl.replace(e[0], e[1])}});
        return {redirectUrl: newUrl};
    },
    {urls: ["https://www.hs.fi/*"]},
    //note to self
    //this url here must match permissions stated in manifest.json
    ["blocking"]
);