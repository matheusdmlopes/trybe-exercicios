const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const baseHOF = (rightAnswers, studentAnswers, callback) => {
    let counter = 0

    rightAnswers.forEach((element, index) => {
        const compareAnswers = callback(rightAnswers[index], studentAnswers[index])
        counter += compareAnswers
    });
    return counter
}

const verifyResult = (rightAnswers, studentAnswers) => {
    if (studentAnswers === 'N.A') return 0
    if (studentAnswers === rightAnswers) return 1
    if (studentAnswers !== rightAnswers) return -0.5
}

console.log(baseHOF(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyResult))