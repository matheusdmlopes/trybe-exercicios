const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta")

const pai = document.getElementById("pai")

const adicionarIrmao = document.createElement('section')
pai.appendChild(adicionarIrmao)

const criarFilho = document.createElement('section')
elementoOndeVoceEsta.appendChild(criarFilho)

const primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho")
primeiroFilhoDoFilho.appendChild(criarFilho)


function acessarTerceiroFilho() {
const terceiroFilhoAcesso = primeiroFilhoDoFilho.appendChild(criarFilho).nextElementSibling.nextElementSibling
console.log(terceiroFilhoAcesso, 'BOA TARDE')
}

acessarTerceiroFilho();