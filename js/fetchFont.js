import {fetchHTMLContent, displayHTMLContent} from './../../../js/fetchHTMLContent.js';

fetchHTMLContent('../../../js/getfont.html');
let insertInto = document.head;
resultText.then(displayHTMLContent(resultText, insertInto));
