const angulo1 = 36;
const angulo2 = 54;
const angulo3 = -90;

let somaDosAngulos = angulo1 + angulo2 + angulo3;

let angulosTodosPositivos;

if (angulosTodosPositivos=  angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    if (somaDosAngulos === 180) {
        console.log(true)
    } else {
        console.log(false)
    };
} else {
    console.log('Erro: angulo invalido')
}