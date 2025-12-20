const h = document.querySelector('h1');
const h2 = document.createElement('h2');
h2.textContent = 'text 2'

h.parentNode.replaceChild(h2, h)