import {{fetchHTMLContent, displayHTMLContent, resultFile, resultText}} from './../../../js/fetchHTMLContent.js';

fetchHTMLContent('../../../js/menu.html');
displayHTMLContent(resultText, document.getElementById('menu'));
