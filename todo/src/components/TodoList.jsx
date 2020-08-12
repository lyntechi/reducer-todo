import React from "react";
import Todos from "./Todos";

export default function TodoList(props) {
  const { state } = props;
  return (
    <div>
     <Todos state={state} />
    </div>
  );
}
