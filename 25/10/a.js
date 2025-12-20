const inp = document.querySelector('input');
const btn = document.querySelector('button');
const par = document.querySelector('p');

btn.addEventListener('click', () => {
    try{
        if(inp.value !== inp.value.split('').reverse().join('')) throw new Error('not palindrom');
        par.textContent = 'Палиндром'
    } catch(error){
        alert(error)
    }
})