import React, { Component } from "react";
import { Button, TextField } from "@mui/material";

class AddTodo extends Component {
    constructor() {
      super();
      this.state = {
        content: "",
      };
    }
    handleChange = (event) => {
      this.setState({
        content: event.target.value,
      });
    };
    handleSubmit = (event) => {
      event.preventDefault();
      if (this.state.content.trim()) {
        this.props.addTodo(this.state);
        this.setState({
          content: "",
        });
      }
    };
    render() {
      return (
        <div>
          <TextField 
            label="Add New Item" 
            variant="outlined"
            onChange={this.handleChange} // call handleChange here
            value={this.state.content} // set the content state here 
            data-testid="new-item-textfield"
          />
          <Button
            style={{ marginLeft: "10px" }}
            onClick={this.handleSubmit} // call handleSubmit here
            variant="contained"
            color="primary"
            data-testid="new-item-button">
            Add  
          </Button>
        </div>
      );
    }
  }
  
  export default AddTodo;