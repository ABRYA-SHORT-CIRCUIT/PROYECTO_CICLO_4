import React from "react";

function Button (props){

    return(
        <button onClick={props.eventoClickBoton}>
            {/* <Link to={{ pathname:props.ruta}}>Ver detalles</Link> */}
            {props.nombreBoton}</button>
    )
}

export {Button};