const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyAnswers = (rightAnswers, studentAnswers) => {
    if (studentAnswers === rightAnswers) return 1
    if (studentAnswers === 'N.A') return 0
    if (rightAnswers !== studentAnswers) return -0.5
}

const baseFunctionHOF = (rightAnswers, studentAnswers, action) => {
    let contador = 0
    for (let index = 0; index < rightAnswers.length; index += 1) {
        const compareAnswers = action(rightAnswers[index], studentAnswers[index])
        contador += compareAnswers
    }
    return `Resultado final: ${contador}`
}
console.log(baseFunctionHOF(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswers));
