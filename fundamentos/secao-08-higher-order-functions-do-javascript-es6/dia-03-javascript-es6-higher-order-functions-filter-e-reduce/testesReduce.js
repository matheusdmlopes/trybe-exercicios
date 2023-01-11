// const valorItens = [1, 32, 44, 2, 3];

// valorItens.reduce((acc, element) => {
//     // console.log(`acumulador - acc:`, acc);
//     console.log(`valorAtual - element:`, element);
//     console.log(acc + element)
//     return acc + element
// }, 0);

// const somarNumerosDoArray = (acc, element) => acc + element

// const valorTotal = valorItens.reduce(somarNumerosDoArray)

// console.log(valorTotal)

// const numbers = [-30, 3, 15, 50, 85];

// const getBigger = numbers.reduce((acc, element) => {
//     console.log(acc, element)
//     return acc > element ? acc : element
// })

// console.log(getBigger)

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somarPares = numbers.reduce((acc, element) => element % 2 === 0 ? element + acc : acc)

console.log(somarPares)

const filtrarPares = numbers.filter((element) => element % 2 === 0)

const somarPares2 = filtrarPares.reduce((acc, element) => acc + element)

console.log(somarPares2)