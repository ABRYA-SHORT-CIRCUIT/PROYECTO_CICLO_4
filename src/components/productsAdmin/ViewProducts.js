import React from "react";
//import { Button } from "../Button/Button";
import { ListContext } from '../context/ListContext';
import { useParams } from 'react-router-dom'

function ViewProduct() {

    const { arrayProductsState } = React.useContext(ListContext);

    const { id } = useParams();

    return (
        <React.Fragment>
            <div className="single-product-main">

                {/* View product */}
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

                <section className="section" id="product">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="left-images">
                                    {typeof(arrayProductsState[id].Image) === 'string' && <img src={arrayProductsState[id].Image} alt="TV"></img>}
                                    {!arrayProductsState[id].Image && <img src="assets/images/televisor_1000.jpg" alt="TV" ></img>}
                                    {arrayProductsState[id].Image && typeof(arrayProductsState[id].Image) !== 'string'&& (<img src={URL.createObjectURL(arrayProductsState[id].Image)} alt="TV"></img>)}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="right-content">
                                    <h4>{arrayProductsState[id].Model}</h4>
                                    <span className="price">$ {arrayProductsState[id].Price}</span>
                                    <ul className="stars">
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                    </ul>
                                    <span>{arrayProductsState[id].Description}</span>
                                    <div className="quote">
                                        <i className="fa fa-quote-left"></i><p>{arrayProductsState[id].Model}</p>
                                    </div>
                                    <div className="quantity-content">
                                        <div className="left-content">
                                            <h6>No. of Stock</h6>
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