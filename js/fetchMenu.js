item++;
insertTo[item] = document.getElementById('menu');

fetchHTMLContent('../../../js/menu.html')
.then(displayHTMLContent);
