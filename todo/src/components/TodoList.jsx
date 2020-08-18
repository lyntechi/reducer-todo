import React from "react";
import Todos from "./Todos";

export default function TodoList(props) {
  const { state } = props;
  return (
    <div>
      {state.map((todo, index) => {
        return <Todos todo={todo} key={todo.id} index={index} />;
      })}
    </div>
  );
}
