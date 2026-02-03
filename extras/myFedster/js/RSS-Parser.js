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
    useNodeType(xmlNode);
    for (let i = 0; i < xmlNode.childElementCount; i++) {
        extractFeedData(xmlNode.children[i]);
    }
}

function useNodeType(xmlNode) {
    feedConverter = {
        rss: '<div class="rss"></div>',
        channel: '<div class="channel"></div>',
        title: '<div class="title"></div>',
        link: '<div class="link"></div>',
        description: '<div class="description"></div>',
        item: '<div class="item"></div>'
    };
    displayNode(feedConverter[`${xmlNode.nodeName}`]);
}

function displayNode(insertedHTML) {
    document.body.getElementsByClassName('content')[0].innerHTML += insertedHTML;
}
