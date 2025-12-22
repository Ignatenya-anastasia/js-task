const items = [
    {
        id: 1,
        category: "Фрукты",
        name: "Яблоко",
        description: "Сладкое и сочное яблоко.",
    },
    {
        id: 2,
        category: "Фрукты",
        name: "Банан",
        description: "Полезный и питательный банан.",
    },
    {
        id: 3,
        category: "Овощи",
        name: "Морковь",
        description: "Свежая и хрустящая морковь.",
    },
    {
        id: 4,
        category: "Овощи",
        name: "Огурец",
        description: "Сочный и освежающий огурец.",
    },
    {
        id: 5,
        category: "Ягоды",
        name: "Клубника",
        description: "Сладкая и ароматная клубника.",
    },
    {
        id: 6,
        category: "Ягоды",
        name: "Черника",
        description: "Полезная и вкусная черника.",
    },
];

const btn1 = document.querySelector(".fr_btn");
const btn2 = document.querySelector(".vg_btn");
const btn3 = document.querySelector(".str_btn");
const div = document.querySelector(".info");
const modal = document.querySelector(".modal");




//function-helper to create cards
function createCard (item){
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = item.id;
    card.innerHTML = `
        <p>${item.name}</p>
        <p>${item.category}</p>
        <p>${item.description}</p>
        <hr>
    `;
    return card;
}


function showCards (category) {
    const check = items.filter((el) => el.category === category);
    div.innerHTML = '';
    check.forEach(item => div.appendChild(createCard(item)))
};

btn1.addEventListener("click", () => showCards("Фрукты"));
btn2.addEventListener("click", () => showCards("Овощи"));
btn3.addEventListener("click", () => showCards("Ягоды"));


div.addEventListener('click', (event) => {
    const card = event.target.closest('.card'); //closset - find tag with classname card
    if(!card) return;

    const id = Number(card.dataset.id);
    const item = items.find(el => el.id === id);
    if (!item) return;

    modal.innerHTML = `
        <h1>${item.name}</h1>
        <p>${item.category}</p>
        <p>${item.description}</p>
        <button class="close">Close</button>
    `;
    modal.style.display = 'block';
})

modal.addEventListener("click", (event) => {
    if (event.target.classList.contains("close")) {
        modal.style.display = "none";
    }
});
