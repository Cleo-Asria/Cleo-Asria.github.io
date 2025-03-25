fetchMenu('https://GeekySans.github.io/menu.txt')
.then(displayMenu);

async function fetchMenu(file) {
  let myFile = await fetch(file);
  return await myFile
}

async function displayMenu(myFile) {
  let myHTML = await myFile.text();
  document.getElementsByClassName('menu')[0].innerHTML = myHTML;
}
