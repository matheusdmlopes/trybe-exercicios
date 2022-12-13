// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const verifyAnswers = (rightAnswers, studentAnswers) => {
//     if (studentAnswers === rightAnswers) return 1
//     if (studentAnswers === 'N.A') return 0
//     if (rightAnswers !== studentAnswers) return -0.5
// }

// const baseFunctionHOF = (rightAnswers, studentAnswers, action) => {
//     let contador = 0
//     for (let index = 0; index < rightAnswers.length; index += 1) {
//         const compareAnswers = action(rightAnswers[index], studentAnswers[index])
//         contador += compareAnswers
//     }
//     return `Resultado final: ${contador}`
// }
// console.log(baseFunctionHOF(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswers));














const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyAnswers = (rightAnswers, studentAnswers) => {
    if (rightAnswers === studentAnswers) return 1
    if (studentAnswers === 'N.A') return 0
    if (studentAnswers !== rightAnswers) return -0.5
}

const highOrderFunction = (rightAnswers, studentAnswers, callback) => {

    let counter = 0

    rightAnswers.forEach((element, index) => {
        const compareAnswers = callback(rightAnswers[index], studentAnswers[index])
        counter += compareAnswers
    });
    return `Resultado final: ${counter}`
}

console.log(highOrderFunction(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswers))
