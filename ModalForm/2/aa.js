const books = [
    { id: 1, genre: "Фантастика", title: "Дюна", author: "Фрэнк Герберт", year: 1965, description: "Эпическая сага о борьбе за контроль над пустынной планетой Арракис." },
    { id: 2, genre: "Детектив", title: "Убийство в Восточном экспрессе", author: "Агата Кристи", year: 1934, description: "Знаменитый детектив с участием Эркюля Пуаро." },
    { id: 3, genre: "Фантастика", title: "Гиперион", author: "Дэн Симмонс", year: 1989, description: "Поэтическая космическая одиссея, вдохновлённая 'Кентерберийскими рассказами'." },
    { id: 4, genre: "Классика", title: "Преступление и наказание", author: "Ф. М. Достоевский", year: 1866, description: "Роман о морали, вине и искуплении." },
    { id: 5, genre: "Детектив", title: "Холмс: Знак четырёх", author: "Артур Конан Дойл", year: 1890, description: "Одно из первых приключений Шерлока Холмса." },
    { id: 6, genre: "Классика", title: "Анна Каренина", author: "Л. Н. Толстой", year: 1877, description: "Роман о любви, обществе и внутреннем конфликте." }
];

const btnAll = document.querySelector('.btn-all');
const btnFantastic = document.querySelector('.btn-fn');
const btnClassic = document.querySelector('.btn-cl');
const btnDetective = document.querySelector('.btn-det');
const divCard = document.querySelector('.books-list');
const divModal = document.querySelector('.modal');

function showCards(genre = null) {
    const check = books.filter(book => genre === null ? true : book.genre === genre);
    divCard.innerHTML = '';
    check.forEach((el) => {
        const cardHtml = `
        <h2>${el.title}</h2>
    <p>${el.author}</p>
    <p>${el.genre}</p>
    <p>${el.year}</p>
    <p>${el.description}</p>
        `
        divCard.innerHTML += cardHtml;
    })
};

btnAll.addEventListener('click', () => showCards(null));
btnFantastic.addEventListener('click', () => showCards('Фантастика'));
btnDetective.addEventListener('click', () => showCards('Детектив'));
btnClassic.addEventListener('click', () => showCards('Классика'));

divCard.addEventListener('click', (event) => {
    const currentCard = event.target.parentNode.children;

    divModal.style.display = 'block';

    divModal.innerHTML = `
    <h2>${currentCard[0].textContent}</h2>
    <p>${currentCard[1].textContent}</p>
    <p>${currentCard[2].textContent}</p>
    <p>${currentCard[3].textContent}</p>
    <button class = 'close'>Close</button>
    `
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
        divModal.style.display = "none";
    })
    
})