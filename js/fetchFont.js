import {fetchHTMLContent, displayHTMLContent} from './../../../js/fetchHTMLContent.js';

let resultText = fetchHTMLContent('../../../js/getfont.html');
let insertInto = document.head;
displayHTMLContent(resultText, insertInto);
