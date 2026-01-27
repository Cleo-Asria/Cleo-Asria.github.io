async function fetchHTMLContent(file) {
  let resultFile = await fetch(file);
  let resultText = await resultFile.text();
  return resultText;
}

async function displayHTMLContent(currentNode, insertedHTML) {
  currentNode.innerHTML += await insertedHTML;
}
