import React from 'react'

export const TodoItem = ({todo, onDelete}) =>{
  return (
    <div className='todo'>
        <div style={{display:"flex"}}>
            <img id="mylistImg" src="https://e7.pngegg.com/pngimages/59/1023/png-clipart-angle-square-button-s-rectangle-line-thumbnail.png" alt="" width="18px" height="16px" />
            <h3>{todo.title}</h3>
        </div>
        <div>
            <button><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqk6xPkJYtICRoUcrZWCkCmEx1RFzKxdw6ow&usqp=CAU" alt="loading" width="18px" height="16px" /></button>
            <button id="myDeleteBtn" onClick={()=>{onDelete(todo)}}><img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="loading" width="22px" height="20px" /></button> 
        </div>
    </div>
  )
}
