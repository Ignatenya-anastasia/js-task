const name = document.querySelector('.name');
const email = document.querySelector('.email');
const password =  document.querySelector('.password');
const btn = document.querySelector('button');

const reg = /^ [a-z0-9]+@[a-z]+\.com$/gmi;

btn.addEventListener('click', () =>{
    try{
        if(reg.test(email.value)) throw new Error ('Некоректный ввод почты');
        if(name.value.length == 0) throw new Error('Введите имя');
        if(password.value.length == 0) throw new Error('Придумайте пароль');
    } catch(error){
        alert(error)
    }
})