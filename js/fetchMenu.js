fetchHTMLContent('https://cleo-asria.github.io/js/menu.html')
.then(result => displayHTMLContent(document.getElementById('menu'), result));
