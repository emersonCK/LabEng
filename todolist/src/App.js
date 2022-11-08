import React from 'react';
import './App.css';
import Contador from './Contador';
import TodoList from './TodoList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itens: [],
      text: ''
    }
  }
  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const item = {
      id: Date.now(),
      text: this.state.text
    }
    this.setState(state => ({
      itens: state.itens.concat(item),
      text: ''
    }))
  }

  render() {
    return (
        <div>
          <h3>Tarefas {<Contador />}</h3>
          <TodoList itens={this.state.itens} />
          <form onSubmit={this.handleSubmit}>
            <input id='new-todo' onChange={this.handleChange} value={this.state.text} />
            <button>Inserir</button>
          </form>
        </div>
    )
  }
}
export default App;
