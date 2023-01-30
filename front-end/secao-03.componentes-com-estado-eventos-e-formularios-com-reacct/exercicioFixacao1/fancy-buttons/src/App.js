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

  imprimirConsole1 = () => {
    this.setState((stateAnterior) => ({
      numeroDeCliques1: stateAnterior.numeroDeCliques1 + 1
    }))
    console.log('clicou1')
  }
  imprimirConsole2 = () => {
    this.setState({
      numeroDeCliques2: this.state.numeroDeCliques2 + 1
    })
    console.log('clicou2')
  }
  imprimirConsole3 = () => {
    this.setState({
      numeroDeCliques3: this.state.numeroDeCliques3 + 1
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
    return <div>
      <button onClick={this.imprimirConsole1}>{this.state.numeroDeCliques1}</button>
      <button onClick={this.imprimirConsole2}>{this.state.numeroDeCliques2}</button>
      <button onClick={this.imprimirConsole3}>{this.state.numeroDeCliques3}</button>
      <button onClick={this.limparBotoes}>Limpar tudo</button>
   </div>
  }
}

export default App;
