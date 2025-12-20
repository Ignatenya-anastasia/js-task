const btn =  document.querySelector('button');
const text =  document.querySelector('p');

btn.addEventListener('click', (event) =>{
    if(text.style.display === 'none'){
        text.style.display = 'block';
        btn.textContent = 'Скрыть';
    } else {
        text.style.display = 'none';
        btn.textContent = 'Показать';
    }
})