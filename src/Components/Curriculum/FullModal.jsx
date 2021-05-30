import React from 'react'
import '../Curriculum/fullmodal.css'
import Icon from '../IMG/Modal.svg'
import Foto from '../IMG/Foto.png'
import {
    Link
  } from 'react-router-dom'



const Fullodal = () => {
   
    return (
        <div className=''>
            <div className='mdal'>
            <img src={Icon} alt="" />
            <button 
            type="button" 
            className="btn btn-prmary" 
            data-toggle="modal" 
            data-target="#exampleModal">
            Curriculum        
            </button>
            <Link to='/curriculum' className='curriculum-btn'>Curriculum</Link>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                 <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">X</button>
      </div>
                    
                        <div className="modal-body">
                            <img src={Foto} alt="" className='photo-1' />
                            </div>
      
    </div>
  </div>
</div>
        </div>
    )
}

export default Fullodal
