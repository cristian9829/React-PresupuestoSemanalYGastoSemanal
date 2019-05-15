import React from 'react';

class Presupuesto  extends React.Component{
  render(){
    return(
      <div className="alert alert-primary">
        El presupuesto: $ {this.props.presupuesto}
      </div>
    )
  }
}


export default Presupuesto;