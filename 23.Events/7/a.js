const click = document.querySelector('button');

click.addEventListener('click', () =>{
    const par = document.querySelector('p');
    const inp = document.querySelector('input')

    try{
        if(isNaN(inp.value)) throw new Error('not a number');

        par.textContent = inp.value * 2;
    } catch(error){
        alert(error)
    }
})