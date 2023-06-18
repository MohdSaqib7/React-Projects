import React from 'react'
import { useState } from 'react';

export const Container = ({addTodo})=> {

    const [title, setTitle] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Todos canot be blank");
        }
        else {
            addTodo(title);
            setTitle("");
        }
    }    

  return (
    <div className='container'>
        <div className="header">
            <h1>Todos</h1>
            <p>Items will persist in the browser local storage</p>
        </div>

        <div className='inputArea'>
            <input value={title} onChange={(e) => setTitle(e.target.value)} id="inputTag" placeholder='Add todo....' maxLength = "30"></input>
            <button onClick={submit}><img src="https://w7.pngwing.com/pngs/68/239/png-transparent-number-computer-icons-plus-miscellaneous-game-plus.png" alt="loading" width="15px" height="15px" /></button>
        </div>
    </div>
  )
}