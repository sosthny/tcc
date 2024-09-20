document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-btn');
    const searchInput = document.getElementById('search');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();
        console.log(`Buscar livros com: ${query}`);
        // Aqui você pode adicionar código para buscar e exibir livros
    });

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});
