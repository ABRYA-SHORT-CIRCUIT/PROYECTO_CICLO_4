import React from "react";

import { Product } from './Product';

import { Link } from "react-router-dom";

import './color.css'




function ProductItemList(props) {


    return (
        <React.Fragment>

            <div className="col-lg-4">
                <Product nombre={props.nombre} precio={props.precio} imagen={props.imagen} />

                <div class="main-border-button ColorEtiqueta">
                    <button ><Link to={{ pathname: `/view-product-admin/${props.id}` }}>Ver detalles</Link>
                    </button>
                </div>
            </div>

        </React.Fragment>
    )
}

export { ProductItemList };