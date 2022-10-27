import React from 'react';
import './color.css';

function Product(props) {

    return (<React.Fragment>

        
            <div className="item">
                <div className="thumb">
                    <div className="hover-content">
                        <ul>
                            <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                            <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                        </ul>

                    </div>
                    {!props.imagen && <img src="assets/images/televisor_1000.jpg"></img>}
                    {props.imagen && (<img src={URL.createObjectURL(props.imagen)} ></img>)}
                </div>

                <div className="down-content">
                    <h4>{props.nombre}</h4>
                    <span>$ {props.precio}</span>
                    <ul className="stars">
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                    </ul>
                </div>
            </div>
       


    </React.Fragment>)
}

export { Product };