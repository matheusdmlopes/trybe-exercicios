const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criarDiasDoMes() {
    let listaDosDias = document.getElementById('days')

    for (let i = 0; i < decemberDaysList.length; i += 1) {

        let dia = decemberDaysList[i]
        let diaLi = document.createElement('li')
        diaLi.innerHTML = dia

        if (dia === 24 || dia === 31) {
            diaLi.className = 'day holiday'
            listaDosDias.appendChild(diaLi)

        } else if (dia === 4 || dia === 11 || dia === 18) {
            diaLi.className = 'day friday'
            listaDosDias.appendChild(diaLi)
        } else if (dia === 25) {
            diaLi.className = 'day friday holiday'
            listaDosDias.appendChild(diaLi)
        } else {
            diaLi.className = 'day'
            listaDosDias.appendChild(diaLi)
        }
    }
}

criarDiasDoMes();

function botaoFeriados(botao) {
    let botaoAcesso = document.querySelector('.buttons-container')
    let createBtn = document.createElement('button')
    let buttonId = 'btn-holiday'

    createBtn.id = buttonId
    createBtn.innerHTML = botao

    botaoAcesso.appendChild(createBtn)

}

botaoFeriados('Feriados');

function mostrarFeriados() {
    let botaoFeriados = document.querySelector('#btn-holiday')
    let feriadosClasse = document.querySelectorAll('.holiday')
    let corDeFundo = 'rgb(238,238,238)'
    let corOriginal = 'white'

    botaoFeriados.addEventListener('click', () => {

        for (let i = 0; i < feriadosClasse.length; i += 1) {
            if (feriadosClasse[i].style.backgroundColor === corOriginal) {
                feriadosClasse[i].style.backgroundColor = corDeFundo
            } else {
                feriadosClasse[i].style.backgroundColor = corOriginal
            }
        }

    })
}

mostrarFeriados();

function botaoSextaFeira(botao2) {

    let botaoContainer = document.querySelector('.buttons-container')
    let createBtn = document.createElement('button')
    let idBotao = 'btn-friday'


    createBtn.innerHTML = botao2
    createBtn.id = idBotao

    botaoContainer.appendChild(createBtn)

}

botaoSextaFeira('Sexta-feira');

function eventoBotaoSextaFeira(sextas) {

    let botaoSextaFeira = document.querySelector('#btn-friday')
    let sextasFeiras = document.querySelectorAll('.friday')
    let textoNovo = 'Texto da sexta-feira alterado!'

    botaoSextaFeira.addEventListener('click', () => {
        for (let i = 0; i < sextasFeiras.length; i += 1) {
            if (sextasFeiras[i].innerHTML !== textoNovo) {
                sextasFeiras[i].innerHTML = textoNovo
            } else {
                sextasFeiras[i].innerHTML = sextas[i]
            }
        }
    })



}
let sextasFeirasDec = [4, 11, 18, 25]
eventoBotaoSextaFeira(sextasFeirasDec);

function zoomIn() {
    let days = document.querySelector('#days')

    days.addEventListener('mouseover', (event) => {
        event.target.style.fontSize = '30px'
        event.target.style.fontWeight = '700'
    })
}

function zoomOut() {
    let days = document.querySelector('#days')

    days.addEventListener('mouseout', (event) => {
        event.target.style.fontSize = '20px'
        event.target.style.fontWeight = '200'
    })
}

zoomIn();
zoomOut();

function criarTarefa(tarefa) {

    let tarefaSpan = document.createElement('span')
    let tarefasContainer = document.querySelector('.my-tasks')

    tarefaSpan.innerHTML = tarefa
    tarefasContainer.appendChild(tarefaSpan)

}

criarTarefa('projeto');

function adicionarLegendaCor(cor) {
    let tarefasContainer = document.querySelector('.my-tasks')
    let criarDiv = document.createElement('div')

    criarDiv.className = 'task'
    criarDiv.style.backgroundColor = cor

    tarefasContainer.appendChild(criarDiv)
}

adicionarLegendaCor('green');
