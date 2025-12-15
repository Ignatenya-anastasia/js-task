const click = document.querySelector('button');

click.addEventListener('click', () =>{
    const inp = document.querySelector('input');
    try{
    if(inp.length === 0) throw new Error('Пусто');

    if(!isNaN(inp.value)) throw new Error('Correct');
    } catch(error){
        alert(error)
    }

    alert(inp.value);
})