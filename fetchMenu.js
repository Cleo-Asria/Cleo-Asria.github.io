fetchMenu('https://GeekySans.github.io/menu.txt')
.then(displayMenu);

async function fetchMenu(file) {
  let myFile = await fetch(file);
  return await myFile
}

function displayMenu {
  let myHTML = await myFile.text();
  document.getElementById("demo").innerHTML = myHTML;
}
