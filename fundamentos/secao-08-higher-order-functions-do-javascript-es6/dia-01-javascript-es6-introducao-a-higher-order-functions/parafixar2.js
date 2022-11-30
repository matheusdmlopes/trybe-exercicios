const numbers = [19, 21, 30, 3, 45, 22, 15];

// exercicio 1

const verifyDiv = numbers.find((idade) => idade % 3 === 0 && idade % 5 === 0)

console.log(verifyDiv)

// exercicio 2

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const verifyTudo = () => {
    return names.find((name) => name.length === 5)
}
console.log(verifyTudo());
