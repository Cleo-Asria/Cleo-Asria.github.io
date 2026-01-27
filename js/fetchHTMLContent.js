async function fetchHTMLContent(file) {
  let resultFile = await fetch(file);
  let resultText await resultFile.text();
  return resultText;
}

function displayHTMLContent(currentNode, insertedHTML) {
  currentNode.innerHTML += insertedHTML;
}
