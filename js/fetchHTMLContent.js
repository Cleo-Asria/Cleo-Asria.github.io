async function fetchHTMLContent(file) {
  resultFile = await fetch(file);
  resultText = await resultFile.text();
  return resultText;
}

function displayHTMLContent(resultText) {
  insertedHTML = resultText;
  currentNode = insertTo;
  currentHTML = currentNode.innerHTML;
  currentNode.innerHTML = currentHTML + insertedHTML;
}
