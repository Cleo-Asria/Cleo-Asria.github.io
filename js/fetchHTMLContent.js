async function fetchHTMLContent(file) {
  resultFile = await fetch(file);
  return await resultFile.text();
}

function displayHTMLContent(result, insertTo) {
  insertedHTML = result;
  currentNode = insertTo;
  currentHTML = currentNode.innerHTML;
  currentNode.innerHTML = currentHTML + insertedHTML;
}
