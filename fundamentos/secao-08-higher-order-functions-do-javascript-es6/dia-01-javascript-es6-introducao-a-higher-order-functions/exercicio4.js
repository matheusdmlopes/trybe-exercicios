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

// Adicione o código do exercício aqui:

const findAuthor = () => {
    return books.find((element) => element.author.birthYear === 1947).author.name
}

const smallerName = () => {
    let nameBook;
    books.forEach((element) => {
        if (!nameBook || element.name.length < nameBook.length) {
            nameBook = element.name
        }
    });
    return nameBook;
}

const expectedResult = {
    author: {
        birthYear: 1948,
        name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
};

const getNamedBook = () => {
    return books.find((element) => element.name.length === 26)
}

const expectedResult2 = false;

function everyoneWasBornOnSecXX() {
    return books.every((element) => {
        element.author.birthYear >= 1901 && element.author.birthYear < 2000
    })
}

const expectedResult3 = true;

const someBookWasReleaseOnThe80s = () => {
    return books.some((element) => element.releaseYear >= 1980 && element.releaseYear <= 1989)
}
const expectedResult4 = false;

const authorUnique = () => {
    return books.every((book) =>
        !books.some((bookSome) =>
            (bookSome.author.birthYear === book.author.birthYear)
            && (bookSome.author.name !== book.author.name)));
}

console.log(findAuthor())
console.log(smallerName())
console.log(getNamedBook())
console.log(everyoneWasBornOnSecXX())
console.log(someBookWasReleaseOnThe80s())
console.log(authorUnique())