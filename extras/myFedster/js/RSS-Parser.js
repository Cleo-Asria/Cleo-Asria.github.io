fetchFeed('https://Cleo-Asria.github.io/extras/myFedster/feed.xml')
.then(parseFeed)
.then(extractFeedData)

async function fetchFeed(url) {
    const res = await fetch(url);
    const xmlText = await res.text();
    return xmlText;
}

function parseFeed(xmlText) {
    const parser = new DOMParser();  
    const xmlFeed = parser.parseFromString(xmlText, "text/xml");
    return xmlFeed;
}

function extractFeedData(xmlNode) {
    console.log(xmlNode);
    for (let i = 0; i < xmlNode.childElementCount; i++) {
        extractFeedData(xmlNode.children[i]);
    }
}
