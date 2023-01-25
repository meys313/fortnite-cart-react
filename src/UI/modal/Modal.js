import React from "react";
import ReactDOM from 'react-dom';
import './modal.scss';



const BackDrop = props => {
    return <div className="modal-backdrop" onClick={props.onDisplayCart}></div>
}

const ModalWindow = props => {
    return <div className="modal-window">
       <div>
           {props.children}
       </div>
    </div>
}


const Modal = props => {
    const portalElement = document.getElementById("overlays");

    return <React.Fragment>
        {ReactDOM.createPortal(<BackDrop onDisplayCart = {props.onDisplayCart}/>, portalElement)}
        {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
    </React.Fragment>
}

export default Modal