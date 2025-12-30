import {fetchHTMLContent, displayHTMLContent} from './../../../js/fetchHTMLContent.js';

let resultText = await fetchHTMLContent('../../../js/menu.html');
let insertInto = document.getElementById('menu');
resultText.then(displayHTMLContent(resultText, insertInto));
