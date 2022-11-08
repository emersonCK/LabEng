import React from "react";

class Mensagem extends React.Component{
    shoot(t){
        console.log(t);
    }

    render(){
        return (
            <div>
                <h4>Atividade 1</h4>
                <button onClick={this.shoot.bind(this, "Olá mundo")}>Clique</button>
            </div>
        );
    }
}

export default Mensagem;