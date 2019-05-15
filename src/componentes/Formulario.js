import React, {Component} from 'react';

export default class Formulario extends Component{

  //refs para los campos de los formularios

  nombreGasto = React.createRef();
  cantidadGasto = React.createRef();
  
  crearGasto = (e) => {

    //prevenidr el default
    e.preventDefault()

    // Crear el objeto con los datos
    const gasto ={
      nombre: this.nombreGasto.current.value,
      gasto: this.cantidadGasto.current.value  
    }

    console.log(gasto);

    //Agregarlo y enviarlo por props

    //Resetiar (Opcional)
    e.currentTarget.reset();

  }

  render(){
    return(
      <form onSubmit={this.crearGasto}>
        <h2>Agrega tus gastos aqui</h2>
        <div className="campo">
          <label>Nombre Gasto</label>
          <input className="u-full-width" ref={this.nombreGasto} type="text" placeholder="Ej. Transporte" />
        </div>

        <div className="campo">
          <label>Cantidad</label>
          <input className="u-full-width" ref={this.cantidadGasto} type="text" placeholder="Ej. 300" />
        </div>

        <input className="button-primary u-full-width" type="submit" value="Agregar" />
      </form>
    )
  }
}