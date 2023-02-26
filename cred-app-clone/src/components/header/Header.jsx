import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <img src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" width="90px" height="70px" alt='loading'></img>
        <div className='navbar-menu'>
            <h2>Credit score check</h2>
            <h2>CRED pay</h2>
        </div>
    </div>
  )
}

export default Header