async function fetchFeed(url) {
    try {
        const res = await fetch('feed.xml');
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const xmlText = await res.text();
        return xmlText;
    } catch(err) {
        console.error("Error fetching RSS feed:", error);  
        throw error;
    }
}

function parseXML(xmlText) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText.xml);
    return xmlDoc;
}

function extractFeedData(xmlDoc) {
    const channel = querySelector('channel');
    if (!channel) {
        throw new Error("Invalid RSS feed: No <channel> element found");
    }
    
    const feedData = {
        title: channel.querySelector('title')?.textContent || "Untitled Feed",
        link: channel.querySelector('link')?.textContent || "#",
        description: channel.querySelector('description')?.textContent || "No description",
        items: []
    };

    const items = xmlDoc.querySelectorAll("item");
    items.forEach(item => {
        const feedItem = {
            title: channel.querySelector('title')?.textContent || "Untitled Item",
            link: channel.querySelector('link')?.textContent || "#",
            description: channel.querySelector('description')?.textContent || "No description",
            pubDate: item.querySelector("pubDate")?.textContent || "Unknown date"
        }
    })
}
