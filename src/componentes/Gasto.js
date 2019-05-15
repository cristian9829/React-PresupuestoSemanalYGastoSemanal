import React, {Component} from 'react';

export default class Gasto extends Component{
  render(){
    const {gasto, nombre}  = this.props.gasto
    console.log('Gasto desde listado ' + gasto)
    console.log('Nombre del listo ' + nombre)
    return(
      <li className="gastos">
      <p>
        {gasto}
        <span className="gasto">$ {gasto}</span>
      </p>
      </li>
    )
  }
}