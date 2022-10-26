import React from "react";
import {Product} from './Product';


function ProductItemList (props){
    return(
        <li> <Product nombre={props.nombre} descripcion={props.descripcion} 
                caracteristicas={props.caracteristicas} precio={props.precio} /></li>
    )
}

export {ProductItemList};