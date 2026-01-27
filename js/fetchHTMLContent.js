async function fetchHTMLContent(file) {
  let resultFile = await fetch(file);
  let resultText await resultFile.text();
  return resultText;
}

function displayHTMLContent(result, insertTo) {
  let insertedHTML = result;
  let currentNode = insertTo;
  currentHTML = currentNode.innerHTML;
  currentNode.innerHTML = currentHTML + insertedHTML;
}
