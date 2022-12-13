// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {

//     const verify = names.some((nome) => nome === name)
//     if (verify) {
//         return true
//     } else {
//         return false
//     }
// };

// console.log(hasName(names, 'Ana'));
// console.log(hasName(names, 'Pedro'));

// ///

// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
// ];

// //Adicione seu código aqui
// const verifyAges = (array, idadeMinima) => {
//     return array.every((person) => person.age >= idadeMinima)
// }


// console.log(verifyAges(people, 18));
// console.log(verifyAges(people, 14));

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
    //Adicione seu código aqui
    const logica = names.some((element) => element === name)
    if (logica) return true
    if (!logica) return false

};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];

//Adicione seu código aqui

const verifyAges = (arr, idadeMinima) => people.every((element) => {
    const logicaSla = element.age >= idadeMinima
    if (logicaSla) return true
    if (!logicaSla) return false
})

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));