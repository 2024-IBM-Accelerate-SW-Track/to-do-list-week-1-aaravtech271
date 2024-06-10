import React from 'react';
import { Card, CardContent, Grid, ListItemButton, ListItemText, Checkbox } from "@mui/material";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <Grid item xs={12} key={todo.id}>
          <Card>
            <CardContent>
              <ListItemButton onClick={() => deleteTodo(todo.id)}>
                <Checkbox />
                <ListItemText primary={todo.content} />
              </ListItemButton>
            </CardContent>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todo's left</p>
  );

  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      <Grid container spacing={2}>
        {todoList}
      </Grid>
    </div>
  );
}

export default Todos;
