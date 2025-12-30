import {fetchHTMLContent, displayHTMLContent} from './../../../js/fetchHTMLContent.js';

fetchHTMLContent('../../../js/menu.html');
let insertInto = document.getElementById('menu');
resultText.then(displayHTMLContent(resultText, insertInto));
