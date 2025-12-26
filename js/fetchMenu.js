fetchHTMLContent('/menu.html')
.then(displayHTMLContent);

async function fetchHTMLContent(file) {
  let myFile = await fetch(file);
  return await myFile
}

async function displayHTMLContent(myFile) {
  let myHTML = await myFile.text();
  document.getElementsByTagName('body')[0].innerHTML = myHTML;
}
