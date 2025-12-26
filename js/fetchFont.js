fetchHTMLContent('js/getfont.html')
.then(displayHTMLContent);

async function fetchHTMLContent(file) {
  let myFile = await fetch(file);
  return await myFile
}

async function displayHTMLContent(myFile) {
  insertedHTML = await myFile.text();
  currentNode = document.getElementsByClassName('menu')[0];
  currentHTML = currentNode.innerHTML;
  currentNode.innerHTML = currentHTML + insertedHTML;
}
