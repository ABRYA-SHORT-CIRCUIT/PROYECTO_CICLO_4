import React from "react";
import { useParams } from "react-router-dom";
import { PData } from "./commons/ProductData";

class SingleProduct extends React.Component {
    render() {

        function SingleProduct() {
            const { id } = useParams();
            const item = PData[id];
            const MAX_ITEMS = item.Stock;

            function decreaseItems() {
                let count = document.getElementById('quantity').value;
                document.getElementById('quantity').value = count > 1 ? count - 1 : count;
            }

            function increaseItems() {
                let count = document.getElementById('quantity');
                document.getElementById('quantity').value = count.value < MAX_ITEMS ? count.value++ : MAX_ITEMS;
            }

            return (
                <div className="single-product-main">
                    <div className="page-heading" id="top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner-content">
                                        <h2>Línea {item.Brand}</h2>
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
                                        <img src="/assets/images/single-product-01.jpg" alt="" />
                                        <img src="/assets/images/single-product-02.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="right-content">
                                        <h4>{item.Model}</h4>
                                        <span className="price">${item.Price}</span>
                                        <ul className="stars">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                        <span>{item.Description}</span>
                                        <div className="quote">
                                            <i className="fa fa-quote-left"></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.</p>
                                        </div>
                                        <div className="quantity-content">
                                            <div className="left-content">
                                                <h6>No. of Orders</h6>
                                            </div>
                                            <div className="right-content">
                                                <div className="quantity buttons_added">
                                                    <input type="button" value="-" className="minus" onClick={decreaseItems} />
                                                    <input type="number" step="1" min="1" max="" id="quantity" value="1" title="Qty" className="input-text qty text" size="4" pattern="" inputmode="" />
                                                    <input type="button" value="+" className="plus" onClick={increaseItems} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="total">
                                            <h4>Total: $210.00</h4>
                                            <div className="main-border-button"><a href="/">Add To Cart</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
            )
        }
    }
}
export default SingleProduct;