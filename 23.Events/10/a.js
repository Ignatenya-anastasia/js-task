const lock = document.querySelector('.btn1');
const unLock = document.querySelector('.btn2');
const inp = document.querySelector('input');

lock.addEventListener('click', () => {
    inp.disabled = true;
});

unLock.addEventListener('click', () => {
    inp.disabled = false;
})