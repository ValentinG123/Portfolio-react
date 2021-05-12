import React from 'react'
import Carroo from '../../IMG/Carroo.png'
import Buscadorr from '../../IMG/Buscadorr.png'
import EnviarEmaill from '../../IMG/EnviarEmaill.png'
import Proyectcard from './Proyectcard'
import '../proyect.css'



const Proyectcards = () => {
    const proyect = [
        {
            id: 1,
            image: Carroo,
            title: 'Carro de compras',
            url: 'https://github.com/ValentinG123/Carro-de-Compras'
            
        },
        {
            id: 2,
            image: EnviarEmaill,
            title: 'Enviar Email',
            url: 'https://github.com/ValentinG123/Enviar-Email'
            
        },
        {
            id: 3,
            image: Buscadorr,
            title: 'Buscador',
            url: 'https://github.com/ValentinG123/Buscador'
           
        }
    ]
    return (
        <div className='proyect-card-container'>
                  {
                        proyect.map(proyect=> (
                            <div key={proyect.id}>    
                            <Proyectcard 
                            title={proyect.title} 
                            imageSource={proyect.image} 
                            Url={proyect.url} 
                            />
                            </div>
                        ))
                    }  
        </div>
    )
}

export default Proyectcards
