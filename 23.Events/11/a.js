const first = document.querySelector('.first');
const second = document.querySelector('.second');
const click = document.querySelector('button');

click.addEventListener('click', () =>{
    let a = first.value;
    first.value = second.value;
    second.value = a;
})