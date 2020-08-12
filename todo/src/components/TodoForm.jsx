import React from "react";

export default function TodoForm(props) {
  const { newTodo, dispatch, setNewTodo } = props;

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const handleChanges = (e)=>{
   setNewTodo({...newTodo, [e.target.name]: e.target.value})
  }
  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={newTodo} onChange={handleChanges}/>
      <br />
      <button
        onClick={(e) => {
          dispatch({ type: "ADD_TODO", payload: newTodo });
        }}
      >
        Add
      </button>
    </form>
  );
}
