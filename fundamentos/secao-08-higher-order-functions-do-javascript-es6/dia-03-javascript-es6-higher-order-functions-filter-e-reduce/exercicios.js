const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

const fantasyOrScienceFiction = () => {
    return books.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia')
}

console.log(fantasyOrScienceFiction())

const oldBooksOrdered = () => {
    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()
    const getBooks = books.filter((element) => anoAtual - element.releaseYear > 60)

    return getBooks.sort((a, b) => a.releaseYear - b.releaseYear)
}

console.log(oldBooksOrdered())

const booksByAuthorBirthYear = (birthYear) => {
    const getAuthor = books.filter((element) => element.author.birthYear === birthYear)
        .map((element) => element.name)
    return getAuthor
}

console.log(booksByAuthorBirthYear(1920))


const fantasyOrScienceFictionAuthors = () => {
    const getObjects = books.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia').map((element) => element.author.name)
    getObjects.sort()
    return getObjects
}

console.log(fantasyOrScienceFictionAuthors())