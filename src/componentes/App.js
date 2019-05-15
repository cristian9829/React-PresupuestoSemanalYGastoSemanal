import React from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado'


class App extends React.Component {
  
  state = {
    presupuesto: '',
    restante: '',
    gastos: {}
  } 
  
  //Agregar un nuevo gasto al state

  agregarGasto = gasto => {
    // Tomar una copia del state actual
    const gastos = {...this.state.gastos };

    // agregar el gasto al objeto del state
    gastos["gasto" + Date.now() ] = gasto;   

    
    //ponerlo en el state

    this.setState({
      gastos: gastos
    })
  }
  
  render(){
    return (
      <div className="App container">
        <Header
          titulo = 'Gasto Semanal'
        />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario
                agregarGasto = {this.agregarGasto}
              />
            </div>
  
            <div className="one-half column">
              <Listado
                gastos = {this.state.gastos}
              />
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}

export default App;
