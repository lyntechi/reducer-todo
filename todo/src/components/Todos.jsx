import React from "react";

export default function Todos(props) {
  const { todo } = props;

  return (
    <div>
      <p>{todo.item}</p>
    </div>
  );
}
