export async function fetchHTMLContent(file) {
  let myFile = await fetch(file);
  let myText = await myFile.text();
  return await myText;
}

export function displayHTMLContent(myText, insertTo) {
  insertedHTML = myText;
  currentNode = document.head;
  currentHTML = currentNode.innerHTML;
  currentNode.innerHTML = currentHTML + insertedHTML;
}
