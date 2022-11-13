import React from "react";
import { Product } from './Product';
import { Link } from "react-router-dom";

function ProductItemList(props) {
    return (
        <React.Fragment>

            <div className="col-lg-4">
                <Product nombre={props.nombre} caracteristicas={props.caracteristicas} precio={props.precio} imagen={props.imagen} />
                <div className="main-border-button ColorEtiqueta">
                    <button ><Link to={{ pathname: `/view-product-admin/${props.id}` }} style={{color: 'black'}}>Ver detalles</Link>
                    </button>
                </div>
            </div>

        </React.Fragment>
    )
}

export { ProductItemList };