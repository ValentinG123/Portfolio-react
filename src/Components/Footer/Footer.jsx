import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='Footer-container' id='footer'>
           <div className="Footer-content">
                <i className="fas fa-at icon-4"></i>
                <h4>valentingraglia18@gmail.com</h4>
           </div>
           <div className="Footer-content">
                <i className="fas fa-phone icon-3"></i>
                <h4>3412639457</h4>
           </div>
           <div className="Footer-content">
                <i className="fas fa-map-marker-alt icon-5"></i>
                <h4>Rosario, Argentina</h4>
           </div>
        </div>
    )
}

export default Footer
