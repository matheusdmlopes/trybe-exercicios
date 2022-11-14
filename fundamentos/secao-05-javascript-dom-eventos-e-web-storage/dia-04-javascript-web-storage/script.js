window.onload = () => {

    const setBackgroundColor = (color) => {
        let conteudo = document.body
        conteudo.style.backgroundColor = color
        localStorage.setItem('backgroundColor', color)
    }

    const setFontColor = (color) => {
        let conteudo = document.querySelector('.paragraph')
        conteudo.style.color = color
        localStorage.setItem('fontColor', color)
    }

    const setFontSize = (size) => {
        let conteudo = document.querySelector('.paragraph')
        conteudo.style.fontSize = size
        localStorage.setItem('fontSize', size)
    }

    const setLineHeight = (height) => {
        let conteudo = document.querySelector('.paragraph')
        conteudo.style.lineHeight = height
        localStorage.setItem('lineHeight', height)
    }

    const setFontFamily = (family) => {
        let conteudo = document.querySelector('.paragraph')
        conteudo.style.fontFamily = family
        localStorage.setItem('fontFamily', family)
    }

    let bgColorButtons = document.querySelectorAll('#bg-color>button')
    for (let index = 0; index < bgColorButtons.length; index += 1) {
        bgColorButtons[index].addEventListener('click', (event) => {
            setBackgroundColor(event.target.innerHTML)
        })
    }

    let fontColorButtons = document.querySelectorAll('#font-color>button')
    for (let index = 0; index < fontColorButtons.length; index += 1) {
        fontColorButtons[index].addEventListener('click', (event) => {
            setFontColor(event.target.innerHTML)
        })
    }

    let fontSizeButtons = document.querySelectorAll('#font-size>button')
    for (let index = 0; index < fontSizeButtons.length; index += 1) {
        fontSizeButtons[index].addEventListener('click', (event) => {
            setFontSize(event.target.innerHTML)
        })
    }







































}