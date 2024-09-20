// Lista de livros
const books = [
    {
        title: "O Grande Livro",
        author: "João da Silva",
        genre: "Ficção Científica",
        description: "A obra explora temas profundos e fascinantes sobre o futuro da humanidade e a evolução tecnológica.",
        cover: "https://i.im.ge/2024/09/12/fkxCr8.download.jpeg"
    },
    {
        title: "A Jornada das Estrelas",
        author: "Maria Oliveira",
        genre: "Aventura",
        description: "Uma emocionante viagem através das estrelas em busca de novos mundos e aventuras inimagináveis.",
        cover: "https://i.im.ge/2024/09/12/fkEqH9.download.jpeg"
    },
    {
        title: "O Coração da Tempestade",
        author: "Ana Santos",
        genre: "Romance",
        description: "Uma história de amor e coragem ambientada em um cenário de tempestades e desafios pessoais.",
        cover: "https://i.im.ge/2024/09/12/fkxx8M.download.jpeg"
    },
    {
        title: "A Revolução dos Robôs",
        author: "Eduardo Lima",
        genre: "Ficção Científica",
        description: "Explore um futuro onde a inteligência artificial desafia a ordem estabelecida e busca por liberdade.",
        cover: "https://i.im.ge/2024/09/12/fkxcE4.download.jpeg"
    },
    {
        title: "Segredos do Oceano",
        author: "Juliana Costa",
        genre: "Aventura",
        description: "Descubra os mistérios escondidos nas profundezas do oceano e as criaturas incríveis que habitam o fundo marinho.",
        cover: "https://i.im.ge/2024/09/12/fkxRdq.download.jpeg"
    },
    {
        title: "O Guardião das Sombras",
        author: "Felipe Almeida",
        genre: "Fantasia",
        description: "Em um mundo mágico, um herói improvável deve enfrentar forças das trevas e proteger o reino.",
        cover: "https://i.im.ge/2024/09/12/fkxWNp.download.jpeg"
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Distopia",
        description: "Um retrato sombrio de uma sociedade totalitária e opressiva onde o Grande Irmão está sempre observando.",
        cover: "https://i.im.ge/2024/09/12/fkxGfG.download.jpeg"
    },
    {
        title: "Dom Casmurro",
        author: "Machado de Assis",
        genre: "Romance",
        description: "A história de Bentinho, um homem que desconfia de que sua esposa Capitu o traiu, explorando a dúvida e o ciúme.",
        cover: "https://i.im.ge/2024/09/12/fkxJnT.download.jpeg"
    },
    {
        title: "O Senhor dos Anéis",
        author: "J.R.R. Tolkien",
        genre: "Fantasia",
        description: "Uma épica jornada pela Terra Média para destruir o Anel de Poder e salvar o mundo das trevas.",
        cover: "https://i.im.ge/2024/09/12/fkxvx0.download.jpeg"
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        genre: "Aventura",
        description: "A busca obsessiva do Capitão Ahab por vingança contra a baleia branca que lhe tirou a perna.",
        cover: "https://i.im.ge/2024/09/12/fk3T8J.download.jpeg"
    },
    {
        title: "Orgulho e Preconceito",
        author: "Jane Austen",
        genre: "Romance",
        description: "Um romance clássico sobre os obstáculos sociais e emocionais no caminho do amor verdadeiro.",
        cover: "https://i.im.ge/2024/09/12/fk3XQy.download.jpeg"
    },
    {
        title: "O Apanhador no Campo de Centeio",
        author: "J.D. Salinger",
        genre: "Ficção",
        description: "Um retrato íntimo do jovem Holden Caulfield e sua luta contra a alienação e a hipocrisia da sociedade.",
        cover: "https://i.im.ge/2024/09/12/fk3lLS.download.jpeg"
    },
    {
        title: "Guerra e Paz",
        author: "Liev Tolstói",
        genre: "Histórico",
        description: "Uma vasta e rica narrativa que entrelaça as vidas de diversas famílias durante as Guerras Napoleônicas.",
        cover: "https://i.im.ge/2024/09/12/fk3un6.download.jpeg"
    }
];

// Carregar livros
function loadBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = books.map(book => `
        <div class="book-item" onclick="showBookDetails('${book.title}')">
            <img src="${book.cover}" alt="Capa do Livro">
            <div class="book-info">
                <h3>${book.title}</h3>
                <p><strong>Autor:</strong> ${book.author}</p>
                <p><strong>Gênero:</strong> ${book.genre}</p>
                <p class="description">${book.description.slice(0, 100)}...</p>
            </div>
        </div>
    `).join('');
}

// Mostrar detalhes do livro
function showBookDetails(title) {
    const book = books.find(b => b.title === title);
    if (book) {
        document.getElementById('book-title').textContent = book.title;
        document.getElementById('book-author').textContent = `Autor: ${book.author}`;
        document.getElementById('book-genre').textContent = `Gênero: ${book.genre}`;
        document.getElementById('book-description').textContent = book.description;
        document.getElementById('book-cover').src = book.cover;

        // Destaca as informações no modal
        document.getElementById('book-title').classList.add('book-title');
        document.getElementById('book-author').classList.add('book-author');
        document.getElementById('book-genre').classList.add('book-genre');

        document.getElementById('book-modal').style.display = 'flex';
    }
}

// Fechar o modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('book-modal').style.display = 'none';
});

// Função de busca
function searchBooks() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchInput) ||
        book.author.toLowerCase().includes(searchInput) ||
        book.genre.toLowerCase().includes(searchInput)
    );
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = filteredBooks.map(book => `
        <div class="book-item" onclick="showBookDetails('${book.title}')">
            <img src="${book.cover}" alt="Capa do Livro">
            <div class="book-info">
                <h3>${book.title}</h3>
                <p><strong>Autor:</strong> ${book.author}</p>
                <p><strong>Gênero:</strong> ${book.genre}</p>
                <p class="description">${book.description.slice(0, 100)}...</p>
            </div>
        </div>
    `).join('');
}

// Inicializar a página
window.onload = loadBooks;
