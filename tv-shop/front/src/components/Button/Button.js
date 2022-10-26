import React from "react";

function Button (props){

    return(
        <button className={props.color} onClick={props.eventoClickBoton}>{props.nombreBoton}</button>
    )
}

export {Button};