const myList = [5, 2, 3];

// escreva swap abaixo

const swap = (array) => [array[0], array[1], array[2]] = [array[2], array[1], array[0]]

const swap2 = ([a, b, c]) => [c, b, a]// jeito certo, esse altera o array;

console.log(swap2(myList))
console.log(swap(myList))