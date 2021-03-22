import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <List className="todo-list">
      <ListItem>
        <ListItemText primary={props.text} secondary="click if completed" />
      </ListItem>
      {/* <li>{props.text}</li> */}
    </List>
  );
}

export default Todo;
