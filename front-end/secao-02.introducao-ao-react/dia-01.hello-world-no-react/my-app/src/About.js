import React from "react"

const myName = <h1>Matheus De Marco Lopes</h1>
const desc = <p>Tenho 19 anos, estudo na Trybe, gosto de treinar e jogar.</p>
const myHabilities = <h2>minhas habilidades</h2>
const lista = <ul>
    <li>Supino</li>
    <li>Agachamento</li>
    <li>Terra</li>
</ul>


class sla extends React.Component {
    render() {
    return (
        <div>
            {myName}
            {desc}
            {myHabilities}
            {lista}
        </div>
        )
    }
}

export default sla;