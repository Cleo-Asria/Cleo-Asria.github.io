fetchXml('https://Cleo-Asria.github.io/extras/myFedster/feed.xml')
.then(parseXml)
.then(res => getXmlNode(document.getElementsByClassName('content')[0], res.children[0].children[0]));

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
    let nextEl = placeHtmlNode(parentHtmlNode, xmlNode);
    for (let i = 0; i < xmlNode.childElementCount; i++) {
        getXmlNode(nextEl, xmlNode.children[i]);
    }
}

function placeHtmlNode(parentHtmlNode, xmlNode) {
	let newEl = createHtmlNode(parentHtmlNode.classList.value, xmlNode.nodeName, xmlNode.textContent);
	parentHtmlNode.appendChild(newEl);
	return newEl;
}

function createHtmlNode(parentXmlNodeName, xmlNodeName, xmlNodeTextContent) {
	currentHtmlEl = chooseHtmlElNode(parentXmlNodeName, xmlNodeName);
	currentHtmlEl = addHtmlTextNode(currentHtmlEl, xmlNodeTextContent);
	currentHtmlEl = addHtmlAttrs(currentHtmlEl, xmlNodeName, xmlNodeTextContent);
	currentHtmlEl.classList.add(xmlNodeName);
	return currentHtmlEl;
}

function chooseHtmlElNode(parentXmlNodeName, currentXmlNodeName) {
	let currentHtmlNodeName = 'p';
	switch (currentXmlNodeName) {
		case 'channel':
		case 'item':
		currentHtmlNodeName = 'div';
		break
		case 'title':
		switch(parentXmlNodeName) {
			case 'channel':
			currentHtmlNodeName = 'h1';
			break
			case 'item':
			currentHtmlNodeName = 'h3';
			break
			default:
			currentHtmlNodeName = 'p';
		}
		break
		case 'link':
		currentHtmlNodeName = 'a';
		break
		case 'description':
		currentHtmlNodeName = 'p';
	}
	const resultEl = document.createElement(currentHtmlNodeName);
	return resultEl;
}

function addHtmlTextNode(currentHtmlEl, xmlNode) {
	let newText;
	if (xmlNode.childElementCount > 0) {
		newText = document.createTextNode('');
	} else {
		newText = document.createTextNode(xmlNode.textContent);
	}
	currentHtmlEl.appendChild(newText);
	return currentHtmlEl;
}

function addHtmlAttrs(currentHtmlEl, currentXmlNodeName, xmlNodeTextContent) {
	let currentAttrName = '';
	let currentAttrValue = '';
	switch(currentXmlNodeName) {
		case 'link':
		currentAttrName = 'href';
		currentAttrValue = xmlNodeTextContent;
		break
		default:
		return currentHtmlEl;
	}
	currentHtmlEl.setAttribute(currentAttrName, currentAttrValue);
	return currentHtmlEl;
}
