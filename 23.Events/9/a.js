const click = document.querySelector('button');
let colors = ['pink', 'red', 'green'];


click.addEventListener('click', () =>{

    click.style = `background-color: ${colors[Math.floor(Math.random() * colors.length)]}`;
    
})