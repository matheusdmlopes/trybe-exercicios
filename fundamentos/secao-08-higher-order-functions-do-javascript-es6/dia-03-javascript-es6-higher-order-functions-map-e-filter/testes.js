const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

const getFilter = () => dados.filter(element => typeof element === 'string')

console.log(getFilter())

const listaNumeros = [10, 20, 30, 40];

const getNumbersAbove20 = listaNumeros.filter((element) => element > 20)

console.log(getNumbersAbove20)