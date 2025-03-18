fetchMenu('https://GeekySans.github.io/menu.txt');

async function fetchMenu(file) {
  let myFile = await fetch(file);
  let myHTML = await myFile.text();
  document.getElementById("demo").innerHTML = myHTML;
}
