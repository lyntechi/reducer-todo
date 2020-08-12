import React, { useState } from "react";

export default function TodoForm(props) {
  const { dispatch } = props;
  const [inputText, setInputText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setInputText("");
  };

  const handleChanges = (e) => {
    setInputText(e.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={inputText}
        onChange={handleChanges}
        name="inputText"
      />
      <br />
      <button
        onClick={(e) => {
          dispatch({ type: "ADD_TODO", payload: inputText });
        }}
      >
        Add
      </button>
    </form>
  );
}
