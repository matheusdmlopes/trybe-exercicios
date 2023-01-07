const verifyResult = (numeroApostado, numeroSorteado) => {
    console.log(numeroApostado, numeroSorteado)
    return numeroApostado === numeroSorteado ? 'Parabéns, você ganhou!' : 'Tente novamente'
}

const baseHOF = (numeroApostado, callback) => {
    const randomNumber = Math.floor(Math.random() * 5 + 1)
    return callback(numeroApostado, randomNumber)
}

console.log(baseHOF(3, verifyResult))