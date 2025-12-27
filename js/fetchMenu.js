import {fetchHTMLContent, displayHTMLContent} from '../../../js/fetchHTMLContent.js';

let resultFile = fetchHTMLContent('../../../js/menu.html');
let insertInto = document.getElementById('menu');
displayHTMLContent(resultFile, insertInto);
