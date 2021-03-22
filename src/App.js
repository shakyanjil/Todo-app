import React, { useEffect, useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import Todo from "./components/Todo";
import db from "./firebase";


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //when the app load, listen to the daabase and fetch newe todos as they get added/removed

  useEffect(() => {
    // this code runs when app.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, []);

  const addTodo = (event) => {
    // when click fire off the following:
    event.preventDefault(); //Prevent default action i.e. refreshing the page whenever clicked button

    db.collection("todos").add({
      todo: input,
      timestamp: serverTimestamp(),
    });

    // setTodos([...todos, input]);
    setInput(""); //Set input value to be blank after submit
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <form>
        <FormControl>
          <InputLabel>Write your Todos</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
        {/* <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        /> 
        <button type="submit" onClick={addTodo}>
          Add Todo
        </button> */}
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
