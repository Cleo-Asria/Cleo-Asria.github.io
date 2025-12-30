let resultFile;
let resultText;
async function fetchHTMLContent(file) {
  resultFile = await fetch(file);
  resultText = await resultFile.text();
}

function displayHTMLContent(resultText, insertTo) {
  insertedHTML = resultText;
  currentNode = document.head;
  currentHTML = currentNode.innerHTML;
  currentNode.innerHTML = currentHTML + insertedHTML;
}

export {fetchHTMLContent, displayHTMLContent, resultFile, resultText}
