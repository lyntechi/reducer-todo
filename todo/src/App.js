import React, { useReducer } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { initialState, reducer } from "./reducers/formReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
 

  console.log("this is current state", state);

 

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm dispatch={dispatch}/>
      <TodoList state={state.todo} />
    </div>
  );
}

export default App;
