import { productList } from "./ProdList";

function Products() {
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

                        {productList}

                        <div className="col-lg-12">
                            <div className="pagination">
                                <ul>
                                    <li className="active"><a href="/">1</a></li>
                                    <li><a href="/">2</a></li>
                                    <li><a href="/">3</a></li>
                                    <li><a href="/">4</a></li>
                                    <li><a href="/">&gt;</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Products;