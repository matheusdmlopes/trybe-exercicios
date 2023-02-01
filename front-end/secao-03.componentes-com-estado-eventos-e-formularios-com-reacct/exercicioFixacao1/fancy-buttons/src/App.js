import React from 'react'
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0
    }
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white'
  }
  
  imprimirConsole1 = () => {
    const { numeroDeCliques1 } = this.state;
    this.setState((stateAnterior) => ({
      numeroDeCliques1: stateAnterior.numeroDeCliques1 + 1
    }), () => {
      console.log(`Botao 1 ${this.getButtonColor(numeroDeCliques1)}`)
    })

    console.log('clicou1')
  }
  imprimirConsole2 = () => {
    const { numeroDeCliques2 } = this.state;
    this.setState((stateAnterior) => ({
      numeroDeCliques2: stateAnterior.numeroDeCliques2 + 1
    }), () => {
      console.log(`Botao 2 ${this.getButtonColor(numeroDeCliques2)}`)
    })


    console.log('clicou2')
  }
  imprimirConsole3 = () => {
    const { numeroDeCliques3 } = this.state;
    this.setState((stateAnterior) => ({
      numeroDeCliques3: stateAnterior.numeroDeCliques3 + 1
    }), () => {
      console.log(`Botao 3 ${this.getButtonColor(numeroDeCliques3)}`)
    })

    console.log('clicou3')
  }

  limparBotoes = () => {
    this.setState({
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0
    })
  }

  render() {
    const { numeroDeCliques1, numeroDeCliques2, numeroDeCliques3 } = this.state;  
    return <div>
      <button
      type='button'
      onClick={this.imprimirConsole1}
      style= { {backgroundColor: this.getButtonColor(numeroDeCliques1)} }
      >
        {`Botão 1 cliques: ${this.state.numeroDeCliques1}`}
      </button>

      <button 
      onClick={this.imprimirConsole2}
      style= { {backgroundColor: this.getButtonColor(numeroDeCliques2)} }
      >
        {`Botão 2 cliques: ${this.state.numeroDeCliques2}`}
        </button>

      <button 
      onClick={this.imprimirConsole3}
      style= { {backgroundColor: this.getButtonColor(numeroDeCliques3)} }
      >
        {`Botão 3 cliques: ${this.state.numeroDeCliques3}`}
        </button>

      <button 
      onClick={this.limparBotoes}
      >
        Limpar tudo
        </button>
   </div>
  }
}

export default App;
