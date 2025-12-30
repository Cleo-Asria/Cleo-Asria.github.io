async function fetchHTMLContent(file) {
  const resultFile = await fetch(file);
  const resultText = await resultFile.text();
  export {resultFile, resultText}
}

function displayHTMLContent(resultText, insertTo) {
  insertedHTML = resultText;
  currentNode = document.head;
  currentHTML = currentNode.innerHTML;
  currentNode.innerHTML = currentHTML + insertedHTML;
}

export {fetchHTMLContent, displayHTMLContent}
