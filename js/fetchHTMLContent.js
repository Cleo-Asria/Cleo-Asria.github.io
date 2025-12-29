export async function fetchHTMLContent(file) {
  let myFile = await fetch(file);
  return await myFile;
}

export async function displayHTMLContent(myFile, insertTo) {
  insertedHTML = await myFile.text;
  currentNode = document.head;
  currentHTML = currentNode.innerHTML;
  currentNode.innerHTML = currentHTML + insertedHTML;
}
