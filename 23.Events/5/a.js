const click = document.querySelector('button');

click.addEventListener('click', () => {
    const inp = document.querySelector('input');

    try{
        let arr = [0, 1];
        if(isNaN(inp.value)) throw new Error('not a number');

        for(let i = 1; i < inp.value - 1; i++){
            arr.push(arr[i] + arr[i - 1]);
        }

        alert(arr)
    } catch(error){
        alert(error)
    }
})