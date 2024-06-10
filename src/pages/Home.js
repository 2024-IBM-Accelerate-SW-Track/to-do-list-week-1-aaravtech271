import React, { Component } from "react";
import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";
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

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos
    });
  }

  render() {
    return (
      <div className="Home">
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default Home;
