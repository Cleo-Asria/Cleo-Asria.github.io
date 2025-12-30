export async function fetchHTMLContent(file) {
  const resultFile = await fetch(file);
  export const resultText = await resultFile.text();
}

export function displayHTMLContent(resultText, insertTo) {
  insertedHTML = resultText;
  currentNode = document.head;
  currentHTML = currentNode.innerHTML;
  currentNode.innerHTML = currentHTML + insertedHTML;
}
