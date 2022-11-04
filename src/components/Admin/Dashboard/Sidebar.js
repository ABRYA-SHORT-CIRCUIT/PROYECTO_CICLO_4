import { replace } from 'feather-icons';

function Sidebar() {
    setTimeout(() => {
        replace();
        document.getElementById("main-header").style.display = "none";
    }, 1000)


    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">
                            <span data-feather="home"></span>
                            Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span data-feather="file"></span>
                            Órdenes
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span data-feather="shopping-cart"></span>
                            Productos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span data-feather="users"></span>
                            Clientes
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span data-feather="bar-chart-2"></span>
                            Reports
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span data-feather="layers"></span>
                            Integrations
                        </a>
                    </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Reportes consolidados</span>
                    <a className="link-secondary" href="/" aria-label="Add a new report">
                        <span data-feather="plus-circle"></span>
                    </a>
                </h6>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span data-feather="file-text"></span>
                            Semanal
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span data-feather="file-text"></span>
                            Mensual
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span data-feather="file-text"></span>
                            Trimestral
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span data-feather="file-text"></span>
                            Semestral
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <span data-feather="file-text"></span>
                            Anual
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
export default Sidebar;