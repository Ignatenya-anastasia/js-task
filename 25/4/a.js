const btn =  document.querySelector('button');
const par =  document.createElement('h1');
const body = document.querySelector('body');

btn.addEventListener('mouseover', () => {
    
    par.textContent = 'hi!';
    body.appendChild(par);

});

btn.addEventListener('mouseout', () => {
    par.style.display = 'none';
})