fetchXml('https://Cleo-Asria.github.io/extras/myFedster/feed.xml')
.then(parseXml)
.then(res => getXmlNode(document.getElementByClassName('content')[0], res.children[0].children[0]))

async function fetchXml(url) {
    const res = await fetch(url);
    const xmlText = await res.text();
    return xmlText;
}

function parseXml(xmlText) {
    const parser = new DOMParser();  
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");
    return xmlDoc;
}

function getXmlNode(parentHtmlNode, xmlNode) {
    console.log(xmlNode);
    let nextEl = createHtmlNode(parentHtmlNode, xmlNode);
    for (let i = 0; i < xmlNode.childElementCount; i++) {
        getXmlNode(nextEl, xmlNode.children[i]);
    }
}

function createHtmlNode(parentHtmlNode, xmlNode) {
	let newEl = document.createElement('div');
	let newText = ''
	if (xmlNode.childElementCount > 0) {
		newText = document.createTextNode('');
	} else {
		newText = document.createTextNode(xmlNode.textContent); 
	}
	newEl.appendChild(newText);
	parentHtmlNode.appendChild(newEl);
	return newEl;
}
