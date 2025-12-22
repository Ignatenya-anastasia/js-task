const books = [
    { id: 1, genre: "Фантастика", title: "Дюна", author: "Фрэнк Герберт", year: 1965, description: "Эпическая сага о борьбе за контроль над пустынной планетой Арракис." },
    { id: 2, genre: "Детектив", title: "Убийство в Восточном экспрессе", author: "Агата Кристи", year: 1934, description: "Знаменитый детектив с участием Эркюля Пуаро." },
    { id: 3, genre: "Фантастика", title: "Гиперион", author: "Дэн Симмонс", year: 1989, description: "Поэтическая космическая одиссея, вдохновлённая 'Кентерберийскими рассказами'." },
    { id: 4, genre: "Классика", title: "Преступление и наказание", author: "Ф. М. Достоевский", year: 1866, description: "Роман о морали, вине и искуплении." },
    { id: 5, genre: "Детектив", title: "Холмс: Знак четырёх", author: "Артур Конан Дойл", year: 1890, description: "Одно из первых приключений Шерлока Холмса." },
    { id: 6, genre: "Классика", title: "Анна Каренина", author: "Л. Н. Толстой", year: 1877, description: "Роман о любви, обществе и внутреннем конфликте." }
];

//getElement
const btnAll = document.querySelector('.btn-all');
const btnFantastic = document.querySelector('.btn-fn');
const btnClassic = document.querySelector('.btn-cl');
const btnDetective = document.querySelector('.btn-det');
const divCard = document.querySelector('.books-list');
const divModal = document.querySelector('.modal');


function createCard (book) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = book.id; //выбирает для дальнейшего использования , сохраняет id кник как атрибут
    card.innerHTML = `
    <h2>${book.title}</h2>
    <p>${book.author}</p>
    <p>${book.genre}</p>
    <p>${book.year}</p>
    <p>${book.description}</p>
    `;
    return card;
};

function showCards (genre = null) { //задаем изначально ожидаемую пустоту что бы потом смогли вывести весь саисок если не подходит ни один из жанров
    const check = books.filter(book => genre === null ? true : book.genre === genre); //если genre === null то условие возвр тру и подходят все книги
    divCard.innerHTML = '';
    check.forEach(book => divCard.appendChild(createCard(book))); //для каждой отфильтрованной карточки создает див

};

btnAll.addEventListener('click', () => showCards(null));
btnFantastic.addEventListener('click', () => showCards('Фантастика'));
btnDetective.addEventListener('click', () => showCards('Детектив'));
btnClassic.addEventListener('click', () => showCards('Классика'));

divCard.addEventListener('click', (event) => {
    const card = event.target.closest('.card'); // ищет элемент с классом кард если клик по нему
    if(!card) return;

    const id = Number(card.dataset.id);
    const book = books.find((el) => el.id === id); //ищет один элемент с таким id и останавливается когда нашел, лучше всего подходит для поиска по id
    if(!book) return;

    divModal.innerHTML = `
    <h2>${book.title}</h2>
    <p>${book.author}</p>
    <p>${book.year}</p>
    <button class="close">Close</button>
    `;
    divModal.style.display = 'block';
})

divModal.addEventListener('click', (event) => {
    if (event.target.classList.contains("close")) { //клик по кнопке именно с классом close
        divModal.style.display = "none";
    }
})


//Если нужно найти все элементы по условию → используй filter().
//Если нужно проверить, существует ли хотя бы один → some().
//Если нужно убедиться, что все элементы подходят → every().
// для уникального идентификатора (id) — всегда find().
