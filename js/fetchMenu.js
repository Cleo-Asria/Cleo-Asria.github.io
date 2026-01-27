fetchHTMLContent('https://cleo-asria.github.io/js/getfont.html')
.then(result => displayHTMLContent(document.getElementById('menu'), result));
