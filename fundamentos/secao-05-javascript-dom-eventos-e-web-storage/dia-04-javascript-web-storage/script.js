window.onload = () => {

    const setBackgroundColor = (color) => {
        let conteudo = document.body
        conteudo.style.backgroundColor = color
        localStorage.setItem('backgroundColor', color)
    }

    const fontColor = (color) => {
        let conteudo = document.querySelector('.paragraph')
        conteudo.style.color = color
        localStorage.setItem('fontColor', color)
    }

    const setFontSize = (size) => {
        let conteudo = document.querySelector('.paragraph')
        conteudo.style.fontSize = size
        localStorage.setItem('fontSize', size)
    }






































}