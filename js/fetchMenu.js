fetchHTMLContent('/menu.html')
.then(displayHTMLContent);

async function fetchHTMLContent(file) {
  let myFile = await fetch(file);
  return await myFile
}

async function displayHTMLContent(myFile) {
  let insertedHTML = await myFile.text();
  currentHTML = document.body.innerHTML;
  currentHTML = currentHTML + insertedHTML;
}
