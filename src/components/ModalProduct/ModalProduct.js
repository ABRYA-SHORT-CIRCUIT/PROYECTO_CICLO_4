import React from 'react';
import ReactDOM  from 'react-dom';
import './ModalProducts.css';

function ModalProduct ({children}) {
    return ReactDOM.createPortal(
        <div className='ModalBackground'> {children} </div>, document.getElementById("modalProduct")
    );
    
}

export {ModalProduct};