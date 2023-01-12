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