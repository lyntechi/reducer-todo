import React from 'react'

export default function Todos(props){
    const{state}=props;
    return(
        <div>
            <p>{state.item}</p>
        </div>
    )
}