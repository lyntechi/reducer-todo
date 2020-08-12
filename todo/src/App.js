import React, {useState, useReducer} from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from './components/TodoList'
import {initialState, reducer} from './reducers/formReducer'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  console.log("this is state", state);
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm dispatch={dispatch} newTodo={newTodo}/>
      <TodoList state={state}/>
    </div>
  );
}

export default App;
