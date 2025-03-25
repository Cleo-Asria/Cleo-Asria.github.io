fetchMenu('https://GeekySans.github.io/content.xml')
.then(displayMenu);

async function fetchMenu(file) {
  let myFile = await fetch(file);
  return await myFile
}

async function displayMenu() {
  let myHTML = await myFile.text();
  document.getElementsByClassName('content')[0].innerHTML = myHTML;
}
