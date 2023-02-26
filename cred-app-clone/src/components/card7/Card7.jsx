import React from 'react'
import './Card7.css'

function Card7() {
  return (
    <div className='card7'>
        <div className='logos'>
            <img src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" width="90px" height="70px" alt='loading'></img>
            <br></br>
            <img src="https://web-images.credcdn.in/_next/assets/images/home-page/security-logos.png" alt="loading" width="200px" height="50px" />
            <h1>complete security</h1>
            <p>CRED encrypts all data and transactions to ensure a completely secure experience for our members.</p>
            <h4>copyright © 2020-22 Dreamplug Technologies Pvt Ltd.</h4>
        </div>
        <div>
            <div className='products'>
                <h1>products</h1>
                <h5>CRED pay</h5>
                <h5>Credit score check</h5>
            </div>
            <div className='resource'>
                <h1>resources</h1>
                <h5>articles</h5>
                <h5>blog</h5>
                <h5>calculation</h5>
                <h5>credit card payment guide</h5>
                <h5>credit card guide</h5>
                <h4>privacy policy | terms conditions</h4>
            </div>
        </div>
        <div>
            <div className='products'>
                <h1>CRED</h1>
                <h5>about</h5>
                <h5>career</h5>
                <h5>IPL</h5>
                <h5>customer care</h5>
            </div>
            <div className='resource'>
                <h1>policy</h1>
                <h5>security</h5>
                <h5>transaction & user verification</h5>
                <h5>google api disclosure</h5>
                <h5>UPI faq & grievances</h5>
            </div>
        </div>
    </div>
  )
}

export default Card7