import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <Link className="logo" to={{ pathname: "/" }}>ABRYA TVShop</Link>

                            <ul className="nav">
                                <li className="scroll-to-section"><a href="/" className="active">Inicio</a></li>
                                <li className="scroll-to-section"><a href="#men">Samsung</a></li>
                                <li className="scroll-to-section"><a href="#women">LG</a></li>
                                <li className="scroll-to-section"><a href="#kids">Kalley</a></li>
                                <li className="scroll-to-section"><a href="#kids">Otras Marcas</a></li>
                                <li className="submenu">
                                    <a href="/">Menú</a>
                                    <ul>
                                        <li><Link to={{ pathname: "/about" }}>Nosotros</Link></li>
                                        <li><Link to={{ pathname: "/products" }}>Productos</Link></li>
                                        <li><Link to={{ pathname: "/single-product" }}>Single Product</Link></li>
                                        <li><Link to={{ pathname: "/contact-us" }}>Contáctanos</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to={{ pathname: "/products-list-admin" }}>Admin</Link>
                                    <ul>
                                        <li><Link to={{ pathname: "/create-product" }}>Agregar artículo</Link></li> {/* ruta para form */}
                                        <li><Link to={{ pathname: "/products-list-admin" }}>Lista de artículos</Link></li> {/* ruta para productLis */}
                                        <li><Link to={{ pathname: "/ventas" }}>Consultar ventas</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown cart-nav dropdown-slide list-inline-item">
                                    <a href="/" className="dropdown-toggle cart-icon" data-toggle="dropdown" data-hover="dropdown">
                                        <i className="tf-ion-android-cart"></i>
                                    </a>
                                    <div className="dropdown-menu cart-dropdown">

                                        <div className="media">
                                            <a href="/product-single">
                                                <img className="media-object img- mr-3" src="assets/images/cart-1.jpg" alt="carrito" />
                                            </a>
                                            <div className="media-body">
                                                <h6>Ladies Bag</h6>
                                                <div className="cart-price">
                                                    <span>1 x</span>
                                                    <span>1250.00</span>
                                                </div>
                                            </div>
                                            <a href="/" className="remove"><i className="tf-ion-close"></i></a>
                                        </div>

                                        <div className="media">
                                            <a href="/product-single">
                                                <img className="media-object img-fluid mr-3" src="assets/images/cart-2.jpg" alt="Carrito" />
                                            </a>
                                            <div className="media-body">
                                                <h6>Skinny Jeans</h6>
                                                <div className="cart-price">
                                                    <span>1 x</span>
                                                    <span>1250.00</span>
                                                </div>
                                            </div>
                                            <a href="/" className="remove"><i className="tf-ion-close"></i></a>
                                        </div>
                                        <div className="cart-summary">
                                            <span className="h6">Total</span>
                                            <span className="total-price h6">$1799.00</span>
                                            <div className="text-center cart-buttons mt-3">
                                                <a href="/" className="btn btn-small btn-transparent btn-block">View Cart</a>
                                                <a href="/" className="btn btn-small btn-main btn-block">Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="scroll-to-section"><a href="#explore">Ingresar</a></li>
                            </ul>

                            {/**Segmento externo Cart
                            <ul className="top-menu list-inline mb-0 d-none d-lg-block" id="top-menu">
                                <li className="list-inline-item">
                                    <a href="/" className="search_toggle" id="search-icon"><i className="tf-ion-android-search"></i></a>
                                </li>
                                <li className="dropdown cart-nav dropdown-slide list-inline-item">
                                    <a href="/" className="dropdown-toggle cart-icon" data-toggle="dropdown" data-hover="dropdown">
                                        <i className="tf-ion-android-cart"></i>
                                    </a>
                                    <div className="dropdown-menu cart-dropdown">

                                        <div className="media">
                                            <a href="/product-single">
                                                <img className="media-object img- mr-3" src="assets/images/cart-1.jpg" alt="carrito" />
                                            </a>
                                            <div className="media-body">
                                                <h6>Ladies Bag</h6>
                                                <div className="cart-price">
                                                    <span>1 x</span>
                                                    <span>1250.00</span>
                                                </div>
                                            </div>
                                            <a href="/" className="remove"><i className="tf-ion-close"></i></a>
                                        </div>

                                        <div className="media">
                                            <a href="/product-single">
                                                <img className="media-object img-fluid mr-3" src="assets/images/cart-2.jpg" alt="Carrito" />
                                            </a>
                                            <div className="media-body">
                                                <h6>Skinny Jeans</h6>
                                                <div className="cart-price">
                                                    <span>1 x</span>
                                                    <span>1250.00</span>
                                                </div>
                                            </div>
                                            <a href="/" className="remove"><i className="tf-ion-close"></i></a>
                                        </div>
                                        <div className="cart-summary">
                                            <span className="h6">Total</span>
                                            <span className="total-price h6">$1799.00</span>
                                            <div className="text-center cart-buttons mt-3">
                                                <a href="/" className="btn btn-small btn-transparent btn-block">View Cart</a>
                                                <a href="/" className="btn btn-small btn-main btn-block">Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-inline-item"><a href="/"><i className="tf-ion-ios-person mr-3"></i></a></li>
                            </ul>
                            {/**Fin Cart externo */}

                            <a className='menu-trigger' href="/">
                                <span>Menu</span>
                            </a>

                        </nav>
                    </div>
                </div>
            </div>
        </header>


    );
}
export default Header;