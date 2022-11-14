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

    let fontColorButtons = 







































}