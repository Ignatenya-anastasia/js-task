// function showCards(category) {
//     const check = items.filter((el) => (el.category === category ? true : false));
//     div.innerHTML = "";
//     check.forEach((el) => {
//         div.innerHTML += `<div><p>${el.name}</p> <p>${el.category}</p> <p>${el.description}</p></div> <hr>`;
//     });
// }

// btn1.addEventListener("click", () => {
//     showCards("Фрукты");
// });
// btn2.addEventListener("click", () => {
//     showCards("Овощи");
// });
// btn3.addEventListener("click", () => {
//     showCards("Ягоды");
// });

// div.addEventListener("click", (event) => {
//     const currentCard = event.target.parentNode.children;
    
//     modal.style.display = "block";
//     modal.innerHTML = `<h1>${currentCard[0].textContent}</h1> <p>${currentCard[1].textContent}</p> <p>${currentCard[2].textContent}</p> <button class = 'close'>Close</button>`;
//     const close = document.querySelector(".close");
//     close.addEventListener("click", () => {
//         modal.style.display = "none";
//     });
// });

//parentNode родительский тег