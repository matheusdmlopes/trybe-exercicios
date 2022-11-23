const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

function addTurno(objeto, chave, valor) {
    objeto[chave] = valor
}
addTurno(lesson2, 'turno', 'noite');
console.log(lesson2);

function listKeys(objeto) {
    const listar = Object.keys(objeto)
    console.log(listar)
}
listKeys(lesson3);

function showLengthObject(objeto) {
    const getLength = Object.entries(objeto).length
    console.log(getLength)
}
showLengthObject(lesson1);

function listValuesObject(objeto) {
    const listValues = Object.values(objeto)
    console.log(listValues)
}
listValuesObject(lesson3);

const allLessons = {}

Object.assign(allLessons, { lesson1, lesson2, lesson3 })

console.log(allLessons);