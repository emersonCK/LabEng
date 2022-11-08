import { render } from '@testing-library/react';
import React from 'react';

class Contador extends React.Component{
    constructor(props){
        super(props);
        this.state = {segundos: 0}
    }
    thick(){ // Método para adicionar os segundo no contador.
        this.setState({segundos: this.state.segundos +1})
    }
    componentDidMount(){
        this.interval = setInterval(()=> this.thick(), 1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
        return(
            <div>
                <p>Segundos: {this.state.segundos}</p>
            </div>
        )
    }
}


export default Contador;