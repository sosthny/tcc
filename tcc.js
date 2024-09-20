// Lista de TCCs
const theses = [
    {
        title: "Inteligência Artificial em Saúde",
        author: "Alice Souza",
        area: "Tecnologia",
        description: "Este TCC explora o uso da inteligência artificial no setor de saúde, desde diagnóstico até tratamentos inovadores."
    },
    {
        title: "Energias Renováveis: O Futuro Sustentável",
        author: "Bruno Carvalho",
        area: "Meio Ambiente",
        description: "Uma análise das tecnologias e políticas necessárias para um futuro com energia sustentável."
    },
    {
        title: "A Evolução da Comunicação Digital",
        author: "Camila Ferreira",
        area: "Comunicação",
        description: "O impacto da transformação digital na comunicação e como ela remodela o mundo moderno."
    },
    {
        title: "Sistemas de Automação em Bibliotecas",
        author: "Carlos Andrade",
        area: "Biblioteconomia",
        description: "Uma revisão sobre os principais sistemas de automação em bibliotecas e como eles melhoram a gestão de acervos."
    }
];

// Carregar lista de TCCs
function loadTheses() {
    const thesisList = document.getElementById('thesis-list');
    thesisList.innerHTML = theses.map(thesis => `
        <div class="thesis-item" onclick="showThesisDetails('${thesis.title}', '${thesis.author}', '${thesis.area}', '${thesis.description}')">
            <h3>${thesis.title}</h3>
            <p><strong>Autor:</strong> ${thesis.author}</p>
            <p><strong>Área:</strong> ${thesis.area}</p>
            <p class="description">${thesis.description.slice(0, 100)}...</p>
        </div>
    `).join('');
}

// Mostrar detalhes do TCC no modal
function showThesisDetails(title, author, area, description) {
    document.getElementById('thesis-title').textContent = title;
    document.getElementById('thesis-author').textContent = `Autor: ${author}`;
    document.getElementById('thesis-area').textContent = `Área: ${area}`;
    document.getElementById('thesis-description').textContent = description;
    document.getElementById('thesis-modal').style.display = 'flex';
}

// Fechar modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('thesis-modal').style.display = 'none';
});

// Função para exibir mensagem de sucesso ao reservar
function reserveThesis() {
    alert('TCC reservado com sucesso!');
    document.getElementById('thesis-modal').style.display = 'none';
}

// Adiciona evento de click ao botão de reservar
document.getElementById('reserve-btn').addEventListener('click', reserveThesis);

// Função de busca
function searchTheses() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredTheses = theses.filter(thesis =>
        thesis.title.toLowerCase().includes(searchInput) ||
        thesis.author.toLowerCase().includes(searchInput) ||
        thesis.area.toLowerCase().includes(searchInput)
    );
    const thesisList = document.getElementById('thesis-list');
    thesisList.innerHTML = filteredTheses.map(thesis => `
        <div class="thesis-item" onclick="showThesisDetails('${thesis.title}', '${thesis.author}', '${thesis.area}', '${thesis.description}')">
            <h3>${thesis.title}</h3>
            <p><strong>Autor:</strong> ${thesis.author}</p>
            <p><strong>Área:</strong> ${thesis.area}</p>
            <p class="description">${thesis.description.slice(0, 100)}...</p>
        </div>
    `).join('');
}

// Inicializar a página
window.onload = loadTheses;
