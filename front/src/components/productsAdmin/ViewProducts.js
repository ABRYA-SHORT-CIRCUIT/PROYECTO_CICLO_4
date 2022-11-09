import React, { useEffect } from "react";
import { ListContext } from '../context/ListContext';
import { useParams } from 'react-router-dom';
import Axios from "axios";
import { useAlert } from 'react-alert';
import { Link } from "react-router-dom";

function ViewProduct() {

    const { arrayProductsState } = React.useContext(ListContext);
    const [product, setProduct] = React.useState({})

    const { id } = useParams();
    const alert = useAlert();

    useEffect(
        () => {
            const toViewProduct = async (id) => {
                const { data } = await Axios.get(
                    `http://localhost:4000/admin/findProduct/${id}`
                );

                console.log("Producto encontrado" + JSON.stringify(data.product));
                setProduct(data.product);
            };
            toViewProduct(id);
        }, []
    )

    const toDeleteProduct = async (id) => {
        const { data } = await Axios.delete(
            `http://localhost:4000/admin/deleteProduct/${id}`
        );
        console.log("Producto eliminado" + JSON.stringify(data));
    };

    function eliminar() {
        console.log("ejecutando el eliminar")
        toDeleteProduct(id);

        alert.success("Producto eliminado con exito");
    }


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
                                    {/* <h1>{product.image.url}</h1> */}
                                    {/* <img src={"../"+product.image.url} alt="TV"></img> */}
                                    {/* {typeof(product.image) === 'string' && <img src={"../"+product.image} alt="TV"></img>}
                                    {!product.image && <img src="assets/images/televisor_1000.jpg" alt="TV" ></img>}
                                    {product.image && typeof(product.image) !== 'string'&& (<img src={URL.createObjectURL(product.image)} alt="TV"></img>)} */}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="right-content">
                                    <h4>{product.model}</h4>
                                    <span className="price">$ {product.price}</span>

                                    <ul className="stars">
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                    </ul>

                                    <span>Caracteristicas: {product.description}</span>
                                    
                                    <div className="quantity-content">
                                        <div className="left-content">
                                            <h6>No. of Stock</h6>
                                        </div>
                                        <div className="right-content">
                                            <div className="quantity buttons_added">
                                                <input type="button" className="minus" />
                                                <input type="number" step="1" min="1" max="" name="quantity" title="Qty" className="input-text qty text" size="4" pattern="" /><input type="button" className="plus" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opciones">
                                        <h4>opciones</h4>
                                        <div className="main-border-button"><button >
                                            <Link to={{ pathname: `/update-product/${product._id}` }}
                                                style={{ color: 'black' }}>Editar Producto</Link></button></div>

                                        <div className="main-border-button"><button >
                                            <Link to={{ pathname: "/products-list-admin" }} onClick={eliminar}
                                                style={{ color: 'black' }}>Eliminar Producto</Link></button></div>
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