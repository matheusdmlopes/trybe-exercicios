

// // exercicio 1

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyDiv = numbers.find((idade) => idade % 3 === 0 && idade % 5 === 0)

// console.log(verifyDiv)

// // exercicio 2

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const verifyTudo = () => {
//     return names.find((name) => name.length === 5)
// }
// console.log(verifyTudo());

// // exercicio 3

// const musicas = [
//     { id: '31031685', title: 'Partita in C moll BWV 997' },
//     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ];

// const verifyEssaPorra = musicas.find((musica) => musica.id === '31031685');

// console.log(verifyEssaPorra);

const numbers = [19, 21, 30, 3, 45, 22, 15];

// Adicione seu código aqui

const logica = numbers.find((element) => element % 3 === 0 && element % 5 === 0)

console.log(logica)
//

const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Adicione seu código aqui
const logica2 = names.find((element) => element.length === 5)

console.log(logica2)
//

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

// Adicione seu código aqui
const logica3 = musicas.find((element => element.id === '31031685'))
console.log(logica3)
