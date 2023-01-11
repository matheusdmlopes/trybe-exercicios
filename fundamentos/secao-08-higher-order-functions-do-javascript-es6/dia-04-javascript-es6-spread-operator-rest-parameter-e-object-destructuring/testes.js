const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers)); // 800

const countParams = (...args) => {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(countParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(countParams('string', null, [1, 2, 3], {})); // Você passou 4 parâmetros para a função.

const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
};

const { a, b, c } = student;

console.log(a); // Maria
console.log(b); // Turma B
console.log(c); // Matemática

