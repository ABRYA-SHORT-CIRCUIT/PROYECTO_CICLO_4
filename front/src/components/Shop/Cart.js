import { shopList } from "./ShopList";

function Cart() {
    return (
        <div className="checkout-container">
            <section className="page-header">
                <div className="overly"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="content text-center">
                                <h1 className="mb-3">Cart</h1>
                                Todos nuestros productos son cuidadosamente empacados de manera individual para que te lleguen en perfecto estado

                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb bg-transparent justify-content-center">
                                        <li className="breadcrumb-item"><h1>Carrito de Compras</h1></li>
                                        {/*<li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Cart</li>*/}
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="cart shopping page-wrapper">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="product-list">
                                <form className="cart-form">
                                    <table className="table shop_table shop_table_responsive cart" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail"> </th>
                                                <th className="product-name">Producto</th>
                                                <th className="product-price">Precio</th>
                                                <th className="product-quantity">Cantidad</th>
                                                <th className="product-subtotal">Total</th>
                                                <th className="product-remove"> </th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            {shopList}

                                            <tr>
                                                <td colspan="6" className="actions">
                                                    <div className="coupon">
                                                        <input type="text" name="coupon_code" className="input-text form-control" id="coupon_code" value="" placeholder="C??digo promocional" />
                                                        <button type="button" className="btn btn-black btn-small" name="apply_coupon" value="C??digo promocional">Aplicar</button>
                                                        <span className="float-right mt-3 mt-lg-0">
                                                            <button type="button" className="btn btn-dark btn-small" name="update_cart" value="Update cart" disabled="">Actualizar</button>
                                                        </span>
                                                    </div>
                                                    <input type="hidden" id="woocommerce-cart-nonce" name="woocommerce-cart-nonce" value="27da9ce3e8" />
                                                    <input type="hidden" name="_wp_http_referer" value="/cart/" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-lg-4">
                            <div className="cart-info card p-4 mt-4">
                                <h4 className="mb-4">Resumen Orden</h4>
                                <ul className="list-unstyled mb-4">
                                    <li className="d-flex justify-content-between pb-2 mb-3">
                                        <h5>Subtotal</h5>
                                        <span>$4.980.000</span>
                                    </li>
                                    <li className="d-flex justify-content-between pb-2 mb-3">
                                        <h5>Env??o</h5>
                                        <span>Gratis</span>
                                    </li>
                                    <li className="d-flex justify-content-between pb-2">
                                        <h5>Total</h5>
                                        <span>$4.980.000</span>
                                    </li>
                                </ul>
                                <a href="/checkout" className="btn btn-main btn-small">Confirmar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Cart;