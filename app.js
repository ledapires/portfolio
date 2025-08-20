const books = [];

function renderBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    books.forEach((book, idx) => {
        const li = document.createElement('li');
        li.className = 'book-item';
        const infoDiv = document.createElement('div');
        infoDiv.className = 'book-info';
        infoDiv.textContent = `${book.name}`;
        const statusSelect = document.createElement('select');
        statusSelect.className = 'status-select';
        statusSelect.innerHTML = `
            <option value="nao-leu" ${book.status === 'nao-leu' ? 'selected' : ''}>Não leu</option>
            <option value="ja-leu" ${book.status === 'ja-leu' ? 'selected' : ''}>Já leu</option>
        `;
        statusSelect.addEventListener('change', () => {
            books[idx].status = statusSelect.value;
        });
        li.appendChild(infoDiv);
        li.appendChild(statusSelect);
        bookList.appendChild(li);
    });
}

document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const isbn = document.getElementById('isbn').value.trim();
    const purchaseDate = document.getElementById('purchaseDate').value;
    const errorDiv = document.getElementById('formError');
    errorDiv.textContent = '';
    if (!name || !isbn || !purchaseDate) {
        errorDiv.textContent = 'Preencha todos os campos obrigatórios.';
        return;
    }
    books.push({
        name,
        isbn,
        purchaseDate,
        status: 'nao-leu'
    });
    renderBooks();
    document.getElementById('bookForm').reset();
});

renderBooks();
