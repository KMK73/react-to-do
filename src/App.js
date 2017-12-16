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
      ]
    };
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
                  */
                  <ToDo key={index} description={todo.description} isCompleted={todo.isCompleted}/>

              )}
          </ul>
      </div>
    );
  }
}

export default App;
