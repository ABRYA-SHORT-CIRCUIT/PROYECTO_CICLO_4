import React from 'react';
import './color.css';
import { ListContext } from '../context/ListContext';

function Product(props) { 

    const {nombre} = React.useContext(ListContext)

    return (<React.Fragment>
        <div>
            {!props.imagen&&<img src="./images/televisor_1000.jpg" width="180" height="180"></img>}
    
            {props.imagen&&(<img src={URL.createObjectURL(props.imagen)} width="180" height="180"></img>)}
            
            <p>{nombre}</p>
            <h3>Nombre del producto: {props.nombre}</h3>
            <p>Descripcion: {props.descripcion}</p>
            <p>Caracteristicas: {props.caracteristicas}</p>
            <p>Precio: {props.precio}</p>
            
        </div>
    </React.Fragment>)
}

export { Product };