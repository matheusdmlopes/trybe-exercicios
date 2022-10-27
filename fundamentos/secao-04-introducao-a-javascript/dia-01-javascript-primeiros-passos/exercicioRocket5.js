let aliquotaInss; 
let aliquotaIr; 

const salarioBruto = 3600

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