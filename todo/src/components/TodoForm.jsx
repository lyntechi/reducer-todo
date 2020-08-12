import React from 'react'



export default function TodoForm(props){
    const{newTodo, dispatch}=props;

    return(
        <form>
            <input type="text"/><br/>
            <button onClick={()=>{
                dispatch({type: "ADD_TODO", payload: newTodo})
                
            }}>Add</button>
        </form>
    )
}