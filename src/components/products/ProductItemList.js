import React from "react";
import { Button } from "../Button/Button";
import {Product} from './Product';
import { FormProductContex } from '../context/FormProductContex';
import { ListContext } from "../context/ListContext";


function ProductItemList (props){

        //Boton para abrir producto
        const { setProduct } = React.useContext(FormProductContex)
        const { setViewProductsState } = React.useContext(ListContext)

        
        

        function viewProduct() {
            const product = {
                nombre: props.nombre,
                descripcion: props.descripcion,
                caracteristicas: props.caracteristicas,
                precio: props.precio
            }
            setViewProductsState(product);
            setProduct(true);
        }

        

    return(
        <React.Fragment>
        <li> <Product nombre={props.nombre} descripcion={props.descripcion} 
                caracteristicas={props.caracteristicas} precio={props.precio} imagen={props.imagen} />
            <Button eventoClickBoton={viewProduct} color="btn btn-warning" nombreBoton="Ver Detalle"></Button>
        </li>
        </React.Fragment>
    )
}

export {ProductItemList};