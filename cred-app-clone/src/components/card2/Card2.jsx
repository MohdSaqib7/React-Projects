import React from 'react'
import './Card2.css'

function Card2(props) {
  return (
    <div className="card2" style={{ backgroundImage:`url(${props.picture})` }}>
        <div className="card2-box">
          <h1>{props.info[0]}</h1>
          <h2>{props.info[1]}</h2>
          <h5>{props.info[2]}</h5>
          <button>{props.info[3]}</button>
        </div>
    </div>
  )
}

export default Card2