import React from 'react'
import Github from '../IMG/Github.svg'
import Linkeid from '../IMG/Linkeid.svg'
import Modal from '../IMG/Modal.svg'

import Card from './Card'
import './card.css'
const Cards = () => {
    const card = [
        {
            id: 1,
            image: Github,
            title: 'Github',
            url: 'https://github.com/ValentinG123?tab=repositories'
            
        },
        {
            id: 2,
            image: Linkeid,
            title: 'Linkeid',
            url: 'https://www.linkedin.com/in/valentin-graglia-a416aa20b/'
            
        },
        {
            id: 3,
            image: Modal,
            title: 'Contacto',
            
        }
    ]
    return (
        <div className='card-content'>
                    {
                        card.map(card=> (
                            <div key={card.id}>    
                            <Card title={card.title} imageSource={card.image} Url={card.url} />
                            </div>
                        ))
                    }         
        </div>
    )
}

export default Cards
