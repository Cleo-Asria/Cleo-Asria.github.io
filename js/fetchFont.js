import {fetchHTMLContent, displayHTMLContent} from '../../../js/fetchHTMLContent.js';

let resultFile = fetchHTMLContent('../../../js/getfont.html');
let insertInto = document.head;
displayHTMLContent(resultFile, insertInto);
