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
    let feriadosClasse = document.querySelector('.holiday')
    let corDeFundo = 'rgb(238,238,238)'
    let corOriginal = 'white'

    botaoFeriados.addEventListener('click', () => {

        for (let i = 0; i < feriadosClasse.length; i += 1) {
            if (feriadosClasse[i].style.backgroundcolor === corOriginal) {
                feriadosClasse[i].style.backgroundcolor = corDeFundo
            } else {
                feriadosClasse[i].style.backgroundcolor = corOriginal
            }
        }

    })
}

mostrarFeriados();

