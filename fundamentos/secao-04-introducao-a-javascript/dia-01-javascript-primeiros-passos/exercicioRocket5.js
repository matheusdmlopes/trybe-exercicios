let aliquotaInss; 
let aliquotaIr; 

const salarioBruto = 3000

if (salarioBruto <= 1556.94) {
    aliquotaInss = salarioBruto * 0.08
} else if (salarioBruto <=2594.92) {
    aliquotaInss = salarioBruto * 0.09
} else if (salarioBruto <= 5189.82) {
    aliquotaInss = salarioBruto * 0.11
} else {
    aliquotaInss = 570.88
}

let salarioDescontadoInss = salarioBruto - aliquotaInss

if (salarioDescontadoInss <= 1903.98) {
    aliquotaIr = 0
} else if (salarioDescontadoInss <= 2826.65) {
    aliquotaIr = (salarioDescontadoInss * 0.075) - 142.80
} else if (salarioDescontadoInss <= 3751.05) {
    aliquotaIr = (salarioDescontadoInss * 0.15) - 354.80
} else if (salarioDescontadoInss <= 4664.68) {
    aliquotaIr = (salarioDescontadoInss * 0.225) - 636.13
} else {
    aliquotaIr = (salarioDescontadoInss * 0.275) - 869.36
}

let salarioFinal = salarioDescontadoInss - aliquotaIr

console.log(salarioFinal)