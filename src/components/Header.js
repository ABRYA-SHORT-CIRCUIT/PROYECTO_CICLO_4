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
                                <li className="submenu">
                                    <a href="/">Menú</a>
                                    {/*<a href="javascript:;">Pages</a>*/}
                                    <ul>
                                        <li><Link to={{ pathname: "/about" }}>Nosotros</Link></li>
                                        <li><Link to={{ pathname: "/products" }}>Productos</Link></li>
                                        <li><Link to={{ pathname: "/single-product" }}>Single Product</Link></li>
                                        <li><Link to={{ pathname: "/contact-us" }}>Contáctanos</Link></li>
                                    </ul>
                                </li>

                                <li className="submenu">
                                    <Link to={{ pathname: "/products-list-admin" }}>Admin</Link>
                                    {/*<a href="/">Admin</a>  ruta para productsList-boton crear */}
                                    
                                    <ul>
                                        <li><Link to={{ pathname: "/create-product" }}>Agregar artículo</Link></li> {/* ruta para form */}
                                        <li><Link to={{ pathname: "/products-list-admin" }}>Lista de artículos</Link></li> {/* ruta para productLis */}
                                        <li><a href="/">Consultar ventas</a></li> 
                                    </ul>
                                </li>

                                <li className="scroll-to-section"><a href="#explore">Ingresar</a></li>
                            </ul>
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