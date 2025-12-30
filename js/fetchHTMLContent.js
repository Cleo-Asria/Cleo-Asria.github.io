export async function fetchHTMLContent(file) {
  let resultFile = await fetch(file);
  let resultText = await resultFile.text();
}

export function displayHTMLContent(resultText, insertTo) {
  insertedHTML = resultText;
  currentNode = document.head;
  currentHTML = currentNode.innerHTML;
  currentNode.innerHTML = currentHTML + insertedHTML;
}
