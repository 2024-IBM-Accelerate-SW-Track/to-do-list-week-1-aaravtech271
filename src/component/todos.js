import React from "react";
import "../component/todos.css";
import {Card,CardContent,Grid,ListItemButton,ListItemText,Checkbox} from "@mui/material";

const Todos = ({ todos }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <Grid key={todo.id}>
          <Card>
            {/* Remember, we set the local state of this todo item when the user submits the form in 
            AddTodo.js. All we need to do is return the todo list item */}
            <CardContent>
              <span style={{ padding: "50px" }}>add todo content</span>
            </CardContent>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todo's left</p>
  );
  // Lastly, return the todoList constant that we created above to show all of the items on the screen.
  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList} {/*call todo list here*/}
    </div>
  );
};
  
export default Todos;
