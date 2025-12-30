import {fetchHTMLContent, displayHTMLContent} from './../../../js/fetchHTMLContent.js';

let resultText = await fetchHTMLContent('../../../js/getfont.html');
let insertInto = document.head;
resultText.then(displayHTMLContent(resultText, insertInto));
