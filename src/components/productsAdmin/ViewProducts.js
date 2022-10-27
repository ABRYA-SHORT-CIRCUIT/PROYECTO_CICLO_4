import React from "react";
import { Button } from "../Button/Button";
import { Product } from './Product';
import { ListContext } from '../context/ListContext';
import { FormProductContex } from '../context/FormProductContex';

function ViewProduct() {

    const { viewProductsState } = React.useContext(ListContext);
    const { setProduct } = React.useContext(FormProductContex);

    function closeProduct() {
        setProduct(false);
    }

    return (
        <React.Fragment>
            <Product nombre={viewProductsState.nombre}
                descripcion={viewProductsState.descripcion}
                caracteristicas={viewProductsState.caracteristicas}
                precio={viewProductsState.precio} />

        <Button nombreBoton="Atras" eventoClickBoton={closeProduct} color="btn btn-warning"></Button>
        </React.Fragment>
    )
}

export {ViewProduct}