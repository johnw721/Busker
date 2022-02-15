import React from 'react';
import ReactDOM from 'react-dom';

const Modal=(props)=>{
    return ReactDOM.createPortal(
        <div>
            <p>
                I am a modal
            </p>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal;