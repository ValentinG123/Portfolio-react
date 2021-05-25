import React from 'react'
import '../Curriculum/fullmodal.css'
import Icon from '../IMG/Modal.svg'
import Foto from '../IMG/Foto.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'



const Fullodal = () => {
   
    return (
        <div className=''>
            <div className='mdal'>
            <img src={Icon} alt="" />
            <button 
            type="button" 
            class="btn btn-prmary" 
            data-toggle="modal" 
            data-target="#exampleModal">
            Curriculum        
            </button>
            <Link to='/curriculum' className='curriculum-btn'>Curriculum</Link>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                 <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">X</button>
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
