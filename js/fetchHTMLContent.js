async function fetchHTMLContent(file) {
  let resultFile = await fetch(file);
  return await resultFile.text();
}

function displayHTMLContent(result, insertTo) {
  let insertedHTML = result;
  let currentNode = insertTo;
  currentHTML = currentNode.innerHTML;
  currentNode.innerHTML = currentHTML + insertedHTML;
}
