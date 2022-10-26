const imposto = 6
const custoProduto = 30 + imposto;
const vendaProduto = 90;
let vendasEmpresa = 1000

let lucro = vendaProduto - custoProduto

if (vendasEmpresa === 1000 && imposto > 0 && custoProduto > 0 && vendaProduto > 0) {
    console.log(lucro * vendasEmpresa)
} else {
    console.log('Valores inválidos')
}