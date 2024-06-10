import React, { Component } from "react";
import AddTodo from "../component/AddTodo"; 
import Todos from "../component/todos"; 
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let new_list = [...this.state.todos, todo];
    this.setState({
      todos: new_list,
    });
  };
  render() {
    return (
      <div className="Home">
        <h1>Todo's</h1>
        <Todos todos={this.state.todos} /> {/* Use the current state for todos */}
        <AddTodo addTodo={this.addTodo} /> {/* Use the addTodo function */}
      </div>
    );
  }
}

export default Home;