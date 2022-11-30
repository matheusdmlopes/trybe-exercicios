const verificarResultado = (meuNumero, numeroSorteado) => meuNumero === numeroSorteado

const sorteio = (meuNumero, verifyResult) => {
    const sorteado = Math.floor((Math.random() * 5) + 1);
    console.log(sorteado)

    if (verifyResult(meuNumero, sorteado) === true) {
        return 'Ganhou!'
    } else {
        return 'Perdeu :('
    }

}

console.log(sorteio(2, verificarResultado))