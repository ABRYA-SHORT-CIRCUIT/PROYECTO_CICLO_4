import React from "react";
import { Button } from "../Button/Button";
import { Product } from './Product';
import { FormProductContex } from '../context/FormProductContex';
import { ListContext } from "../context/ListContext";
import { Link } from "react-router-dom";


function ProductItemList(props) {

    //Boton para abrir producto
    const { setProduct } = React.useContext(FormProductContex)
    const { viewProductsState, setViewProductsState, booleanState, setBooleanState  } = React.useContext(ListContext)

    function viewProduct() {
        console.log("Viendo producto")
        console.log(booleanState)
        const product = {
            nombre: props.nombre,
            descripcion: props.descripcion,
            caracteristicas: props.caracteristicas,
            precio: props.precio
        }
        
        setViewProductsState(product);
        setBooleanState(true);
        // setProduct(true);
        console.log(viewProductsState)
        console.log(booleanState)

    }

    return (
        <React.Fragment>

            <div className="col-lg-4">
                <Product nombre={props.nombre} precio={props.precio} imagen={props.imagen} />
                <button onClick={viewProduct}></button>
                {/* <Link to={{ pathname: "/view-product-admin" }}>Ver detalles</Link> */}
                
                <Button eventoClickBoton={viewProduct} color="btn btn-warning"
                nombreBoton="Ver Detalle" ruta="/view-product-admin"></Button>
            </div>

        </React.Fragment>
    )
}

export { ProductItemList };