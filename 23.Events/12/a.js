let arr = [];

const inp = document.querySelector('input');
const click = document.querySelector('button');
const par = document.querySelector('p');

click.addEventListener('click', () => {
    arr.push(inp.value);
    par.textContent = arr;


})
