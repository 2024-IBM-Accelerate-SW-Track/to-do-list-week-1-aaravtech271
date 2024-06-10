import React, { Component } from 'react';
import { Button, TextField } from "@mui/material";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }

  handleChange = (e) => {
    this.setState({ content: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo({
      content: this.state.content
    });
    this.setState({ content: '' });
  }

  render() {
    return (
      <div>
        <TextField
          label="Add New Item"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.content}
        />
        <Button
          style={{ marginLeft: "10px" }}
          onClick={this.handleSubmit}
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </div>
    );
  }
}

export default AddTodo;
