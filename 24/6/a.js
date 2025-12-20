const h3 = document.createElement('h3');
h3.textContent ='apple'
const p = document.createElement('p');
p.textContent = 'fruit';
const btn = document.createElement('button');
btn.textContent = 'Buy';

const div = document.querySelector('.card');

div.appendChild(h3);
div.appendChild(p);
div.appendChild(btn);