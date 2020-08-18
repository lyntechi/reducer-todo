import React from "react";
import { toggleTodo } from '../actions/TodoListActions'
import connect from "react-redux"

export function Todos(props) {
  const { todo, index } = props;

  return (
    <div onClick={() => todo.toggleTodo(index)}>
      <p>{todo.item}
      
      {todo.completed && <i className="completed" />}</p>
    
    </div>
  );
}

export default connect(null, {toggleTodo})(Todos);