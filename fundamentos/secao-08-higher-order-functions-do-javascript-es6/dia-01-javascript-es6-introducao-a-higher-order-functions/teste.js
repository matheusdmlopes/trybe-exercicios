// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

// arrayOfValues.forEach((element, index) => {
//     console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
// });

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

arrayOfValues.forEach((element, index) => {
    console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
});

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multiply = (element) => console.log(element * 2)


// numbers.forEach((element) => console.log(element * 2))

numbers.forEach(multiply)

const nomes = ['Ricardo', 'Pedro', 'Matheus', 'Robson']

const logica = (letra2, lista) => nomes.some((element) => element[1] === letra2)
const logica2 = (letra2, lista) => nomes.find((element) => element[1] === letra2)

console.log(logica('a', nomes))
console.log(logica2('a', nomes))

const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
};

const verifyGrades = Object.values(grades).every((element) => element === 'Aprovado'); // false

console.log(verifyGrades);