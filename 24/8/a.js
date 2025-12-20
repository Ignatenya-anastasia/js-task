const ul = document.querySelector('ul');
const inp = document.querySelector('input');
const btn = document.querySelector('button')

const reg = /^[a-z0-9]+@[a-z]+\.com$/gmi;

btn.addEventListener('click', () => {
    if(reg.test(inp.value)){
        const li = document.createElement('li');

        li.textContent = inp.value;

        ul.appendChild(li);
    } else{
        alert('Check your email')
    }
})