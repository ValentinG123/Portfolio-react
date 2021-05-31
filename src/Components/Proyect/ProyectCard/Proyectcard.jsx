import React from 'react'
import '../proyect.css'

function Proyectcard({title, imageSource, Url}) {
    return (
        <div className='proyect-container'>
            <img src={imageSource} alt=""  className='proyect-img'/>
            <h4>{title}</h4>
            <a href={Url} target='_blank' rel="noreferrer">
                Ir al proyecto
            </a>
        </div>
    )
}

export default Proyectcard
