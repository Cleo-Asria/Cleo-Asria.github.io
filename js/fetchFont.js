fetchHTMLContent('/getfont.html')
.then(displayHTMLContent);

async function fetchHTMLContent(file) {
  let myFile = await fetch(file);
  return await myFile
}

async function displayHTMLContent(myFile) {
  let insertedHTML = await myFile.text();
  currentHTML = document.head.innerHTML;
  currentHTML = currentHTML + insertedHTML;
}
