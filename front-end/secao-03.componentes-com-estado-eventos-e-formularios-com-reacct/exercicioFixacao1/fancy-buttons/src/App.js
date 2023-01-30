import React from 'react'
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
  }

  imprimirConsole1 = () => {
    this.setState({
      numeroDeCliques: 1
    })
    console.log('clicou1')

  }
  imprimirConsole2 = () => {
    console.log('clicou2')

  }
  imprimirConsole3 = () => {
    console.log('clicou3')

  }

  render() {
    console.log(this)
    return <div>
      <button onClick={this.imprimirConsole1}>botao1</button>
      <button onClick={this.imprimirConsole2}>botao2</button>
      <button onClick={this.imprimirConsole3}>botao3</button>
   </div>
  }
}

export default App;
