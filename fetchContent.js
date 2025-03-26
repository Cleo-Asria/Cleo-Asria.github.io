let position;

fetchData('https://geekysans.github.io/article0.xml')
.then(getNode)

async function fetchData(url) {
let res = await fetch(url);
let string = await res.text();
let parser = new DOMParser();
xml = parser.parseFromString(string, "text/xml");
console.log(xml);
return xml.getElementsByTagName('wfml')[0];
}

function getNode(node) {
  console.log(node);
  checkNode(node);
  for (let i = 0; i < node.childElementCount; i++) {
    getNode(node.children[i]);
  }
}

function checkNode(node) {
  console.log(node.nodeName)
  switch(node.nodeName) {
    case 'body':
    displayNode('div', '', 'wfmlbody', node.nodeName);
    break;
    case 'bio':
    displayNode('div', '', node.parentNode.nodeName, node.nodeName);
    break;
    case 'title':
    displayNode('h3', node.textContent, node.parentNode.nodeName, node.nodeName);
    break;
    case 'description':
    displayNode('p', node.textContent, node.parentNode.nodeName, node.nodeName);
    break;
    case 'feature':
    displayNode('div', '', node.parentNode.nodeName, node.nodeName);
    break;
    case 'text':
    displayNode('p', node.textContent, node.parentNode.nodeName, node.nodeName);
    break;
    case 'link':
    displayNode('a', node.textContent, node.parentNode.nodeName, node.nodeName);
    break;
    case 'list':
    displayNode('div', '', node.parentNode.nodeName, node.nodeName);
    break;
    case 'item':
    displayNode('a', node.textContent, node.parentNode.nodeName, node.nodeName);
    break;
  }
}

function displayNode(htel, nodetxt, getattr, elname) {
  let newEl = document.createElement(htel);
  let newText = document.createTextNode(nodetxt);
  let newAttr = document.createAttribute('class');
  newAttr.value = elname;
  newEl.appendChild(newText);
  newEl.setAttributeNode(newAttr);

  if (document.getElementsByClassName(getattr)[0] !== undefined) {
    position = document.getElementsByClassName(getattr)[0];
    position.appendChild(newEl);
  }
}
