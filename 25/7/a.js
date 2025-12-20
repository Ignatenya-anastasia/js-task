const inp = document.querySelector('input');
const ul = document.querySelector('ul');
ul.style.display = 'none';

inp.addEventListener('focus', () => {
    ul.style.display = 'block';

})

ul.addEventListener('click', (event) => {
    inp.value = event.target.textContent;
    ul.style.display = 'none'
})