const ul = document.createElement('ul');

document.body.appendChild(ul);

for(let i = 0; i < 3; i++){
    const li = document.createElement('li');
    li.textContent = 'text';
    ul.appendChild(li)
}