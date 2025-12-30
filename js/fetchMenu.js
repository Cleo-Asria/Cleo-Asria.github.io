import {fetchHTMLContent, displayHTMLContent} from './../../../js/fetchHTMLContent.js';

let resultText = fetchHTMLContent('../../../js/menu.html');
let insertInto = document.getElementById('menu');
resultText.then(displayHTMLContent, insertInto);
