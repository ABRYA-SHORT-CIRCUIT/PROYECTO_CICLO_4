import React from "react";
import { Link } from "react-router-dom";

function Button (props){

    return(
        <button className={props.color} onClick={props.eventoClickBoton}>
            {/* <Link to={{ pathname:props.ruta}}>Ver detalles</Link> */}
            {props.nombreBoton}</button>
    )
}

export {Button};