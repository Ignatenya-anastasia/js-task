const img = document.querySelector('img');

img.addEventListener('mouseover', () => {
    img.src = './i (1).webp';
})
img.addEventListener('mouseout', () => {
    img.src = './i.webp';
})