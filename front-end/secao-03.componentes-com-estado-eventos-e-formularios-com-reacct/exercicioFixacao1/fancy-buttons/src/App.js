import React from 'react'
import './App.css';

const imprimirConsole1 = () => {
  console.log('texto qualquer1')
}
const imprimirConsole2 = () => {
  console.log('texto qualquer2')
}
const imprimirConsole3 = () => {
  console.log('texto qualquer3')
}

class App extends React.Component {
  render() {
    return <div>
      <button onClick={imprimirConsole1}>botao1</button>
      <button onClick={imprimirConsole2}>botao1</button>
      <button onClick={imprimirConsole3}>botao1</button>
    </div>
  }
}

export default App;
