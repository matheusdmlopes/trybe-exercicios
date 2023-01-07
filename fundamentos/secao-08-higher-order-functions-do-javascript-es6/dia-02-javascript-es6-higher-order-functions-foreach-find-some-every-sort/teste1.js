const array = [9, 5, 3, 4, 1, 8]

// const sortArray = array.sort();
// console.log(sortArray)
console.log(array)
console.log(array.sort())
console.log(array)

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => number > 0 ? number * (-1) : number);

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]
