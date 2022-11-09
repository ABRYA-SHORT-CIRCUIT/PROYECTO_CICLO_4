import React, {useEffect} from 'react';
import { ProductItemList } from './ProductItemList';
import { ListContext } from '../context/ListContext';
import Axios from "axios";

function ProductsListAdmin() {

    //Listar productos

    const { arrayProductsState: arrayProducts, setArrayProductsState } = React.useContext(ListContext);

    useEffect(
        () => {
            const toListProducts = async () => {
                const { data } = await Axios.get(
                    "http://localhost:4000/admin/listProduct"
                );
                
                console.log("buscado productos" + data.listProducts);
                setArrayProductsState(data.listProducts);
            };
            toListProducts();
            
        }
    )

    return (

        <div className="products-main">

            <div className="page-heading" id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-content">
                                <h2>Listado de Productos</h2>
                                <span>Contamos con los últimos modelos de diferentes marcas. Encuentra el tuyo!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="products">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>Nuestras Referencias</h2>
                                <span>Hay un modelo para cada necesidad.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        {arrayProducts.map(televisor => (
                            <ProductItemList key={televisor.SKU} nombre={televisor.Model} descripcion={televisor.Description}
                                caracteristicas={televisor.Model} precio={televisor.Price} imagen={televisor.Image}
                                id={televisor.SKU} />
                        ))
                        }

                        <div className="col-lg-12">
                            <div className="pagination">
                                <ul>
                                    <li>
                                        <a href="/">1</a>
                                    </li>
                                    <li className="active">
                                        <a href="/">2</a>
                                    </li>
                                    <li>
                                        <a href="/">3</a>
                                    </li>
                                    <li>
                                        <a href="/">4</a>
                                    </li>
                                    <li>
                                        <a href="/">&gt;</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>  {/* fin container */}
            </section>
        </div>

    )
}
export { ProductsListAdmin };