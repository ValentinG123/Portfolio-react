import React from 'react'
import '../Card/card.css'



function Card({title, imageSource, Url}) {
    return (
            <div className="card-container">
                <img src={imageSource} alt="" className='img'/>
                <a href={Url} target='_blank' rel="noreferrer">{title}
                </a>
            </div>
            

    )
}

export default Card
