import React from "react";
import { Button } from "../Button/Button";
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
            <div className="single-product-main">
                <div className="page-heading" id="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner-content">
                                    <h2>Single Product Page</h2>
                                    <span>Awesome &amp; Creative HTML CSS layout by therichpost</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* View product */}
                <section className="section" id="product">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="left-images">
                                    {!viewProductsState.imagen && <img src="assets/images/televisor_1000.jpg"></img>}
                                    {viewProductsState.imagen && (<img src={URL.createObjectURL(viewProductsState.imagen)} ></img>)}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="right-content">
                                    <h4>{viewProductsState.nombre}</h4>
                                    <span className="price">$ {viewProductsState.precio}</span>
                                    <ul className="stars">
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                    </ul>
                                    <span>{viewProductsState.descripcion}</span>
                                    <div className="quote">
                                        <i className="fa fa-quote-left"></i><p>{viewProductsState.caracteristicas}</p>
                                    </div>
                                    <div className="quantity-content">
                                        <div className="left-content">
                                            <h6>No. of Orders</h6>
                                        </div>
                                        <div className="right-content">
                                            <div className="quantity buttons_added">
                                                <input type="button" className="minus" /><input type="number" step="1" min="1" max="" name="quantity" title="Qty" className="input-text qty text" size="4" pattern="" /><input type="button" className="plus" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opciones">
                                        <h4>opciones</h4>
                                        <div className="main-border-button"><a href="/">Editar Producto</a></div>
                                        <div className="main-border-button"><a href="/">Eliminar Producto</a></div>
                                        <div><Button nombreBoton="Atras" eventoClickBoton={closeProduct} color="btn btn-warning"></Button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>


        </React.Fragment>
    )
}

export { ViewProduct }