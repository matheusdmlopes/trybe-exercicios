const myList = [5, 2, 3];

// escreva swap abaixo

const swap = (array) => [array[0], array[1], array[2]] = [array[2], array[1], array[0]]

const swap2 = ([a, b, c]) => [c, b, a]// jeito certo, esse altera o array;

console.log(swap2(myList))
console.log(swap(myList))

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = ([i1, i2, i3]) => ({ i1, i2, i3 })

console.log(toObject(palio))

// escreva greet abaixo

const greet = (name, saudação = 'Hi') => `${saudação} ${name}`

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'

// const student1 = {
//     name: `Claudia`,
//     lastName: `Farias`,
//     age: 23,
// }

// const student2 = {
//     name: `Vitor`,
//     age: 20,
// }

// escreva 'getLastName' abaixo para receber os objetos e retornar sua propriedade `lastName`

const getLastName = ({ lastName = 'lastName não preenchido' }) => lastName

// console.log(getLastName(student1));
// console.log(getLastName(student2));

const moreStudents = [
    'Chris',
    ['Ahmad', 'Antigoni'],
    ['Toby', 'Sam']
];

// Escreva seu código aqui
const [student1, [student2, student3], [student4, student5]] = moreStudents;

console.log(student1, student2, student3, student4, student5);