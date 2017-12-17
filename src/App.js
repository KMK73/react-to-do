import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  //Accept props as a parameter.
  //Call super(props).
  constructor(props){
    super(props);

    // set initial states , state must be object
    // The state object can be accessed from anywhere in the class.
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false }
      ],
      newTodoDescription: ''
    };
  }

  toggleComplete(index) {
    console.log('toggle complete executed', index);
    const todos = this.state.todos.slice();
    const todo = todos[index];
    // reads if todo is completed true, expression one change to false. else true
    todo.isCompleted = todo.isCompleted ? false : true;
    // set the state to the const todos array
    this.setState({
      todos: todos
    })
  }

  handleChange(e){
    // console.log('handle change ', e.target.value);
    this.setState({
      newTodoDescription: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    //if empty
    if(!this.state.newTodoDescription){
      return;
    }

    const newTodo = { description: this.state.newTodoDescription, isCompleted: false};
    // uses spread ... syntax to add new element
    // set description to empty to clear the input
    this.setState({
      todos: [...this.state.todos, newTodo],
      newTodoDescription: ''
    });
  }

  render() {
    return (
      <div className="App">
          <ul>
            {
              this.state.todos.map(
                (todo, index) =>
                  /*
                  We also specify a key attribute on ToDo, and we assign it the index.
                   For React to operate properly, each child of an array or iterator needs
                  to have a key with a unique value.
                  The key gives React a reliable way of distinguishing between array items.
                  pass toggleComplete as an anonymous function with an index value
                  */
                  <ToDo key={index} description={todo.description}
                  isCompleted={todo.isCompleted}
                  toggleComplete={ () => this.toggleComplete(index) }/>

              )}
          </ul>
          <form onSubmit= { (e) => this.handleSubmit(e) }>
            <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e)} />
            <input type="submit" />
          </form>
      </div>
    );
  }
}

export default App;
