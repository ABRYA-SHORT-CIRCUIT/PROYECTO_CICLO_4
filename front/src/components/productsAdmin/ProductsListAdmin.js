import React, { useEffect } from 'react';
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

                console.log("buscado productos" + JSON.stringify(data.listProducts));
                setArrayProductsState(data.listProducts);
            };
            toListProducts();
        }, []
    )

    let tv = [...arrayProducts];
    let withoutStock = tv.filter(televisor => (televisor.stock<1));
    let withStock = tv.filter(televisor => (televisor.stock>0));

        

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
                        <h1>Productos con stock</h1>
                        {withStock.map(televisor => (
                            <ProductItemList key={televisor._id} nombre={televisor.brand} caracteristicas={televisor.model}
                                descripcion={televisor.description} precio={televisor.price} imagen={televisor.image}
                                id={televisor._id} />
                        ))
                        }
                </div>
                    <div className="row">
                    <h1>Productos sin stock</h1>
                        {withoutStock.map(televisor => (
                            <ProductItemList key={televisor._id} nombre={televisor.brand} caracteristicas={televisor.model}
                                descripcion={televisor.description} precio={televisor.price} imagen={televisor.image}
                                id={televisor._id} />
                        ))
                        }



                    </div>
                </div>  {/* fin container */}
            </section>
        </div>

    )
}
export { ProductsListAdmin };