import React from 'react'
import './Card5.css'

function Card5() {
  return (
    <div className='card5'>
        <div className="ratings">
            <div className="left">
                <h1>4.8 App Store</h1>
                <img src='	https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png' alt='' width='80px' height='30px'></img><br />
                <button>Download the app</button>
            </div>
            <div className="right">
                <h1>4.7 Play Store</h1>
                <img src='	https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png' alt='' width='80px' height='30px'></img><br />
                <button>Download the app</button>
            </div>
        </div>
        <p>"have been using the app for an year... very happy with this. it greatly avoids the need for searching for statements individually and logging in to pay them all. with cred i can happily pay all my cc bills with a single click. love the experience."</p>
    </div>
  )
}

export default Card5