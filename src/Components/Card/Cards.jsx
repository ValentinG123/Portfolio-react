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
            title: 'Github'
            
        },
        {
            id: 2,
            image: Linkeid,
            title: 'Linkeid'
            
        },
        {
            id: 3,
            image: Modal,
            title: 'Modal'
            
        }
    ]
    return (
        <div className='card-content'>
                    {
                        card.map(card=> (
                            <div key={card.id}>    
                            <Card title={card.title} imageSource={card.image} />
                            </div>
                        ))
                    }         
        </div>
    )
}

export default Cards
