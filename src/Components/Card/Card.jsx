import React from 'react'
import '../Card/card.css'



function Card({title, imageSource}) {
    return (
            <div className="card-container">
                <img src={imageSource} alt="" className='img'/>
                <a href="#">{title}</a>
            </div>

    )
}

export default Card
