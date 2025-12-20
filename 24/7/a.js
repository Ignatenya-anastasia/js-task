const ul = document.querySelector('ul');
const inp = document.querySelector('input');
const click = document.querySelector('button');

click.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = inp.value;

    ul.appendChild(li);
})