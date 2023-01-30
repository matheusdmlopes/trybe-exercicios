import React from 'react'
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    console.log('Componente sendo construído')
  }

  imprimirConsole() {
    console.log('clicou')
  }

  render() {
    console.log(this);
    return <button onClick={this.imprimirConsole}>botao1</button>
  }
}

export default App;
