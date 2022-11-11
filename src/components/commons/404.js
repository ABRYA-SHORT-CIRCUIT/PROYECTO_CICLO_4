import dummy from './404.jpg';
import './404.css';

function NotFound() {
    setTimeout(() => {
        document.getElementById("main-header").style.display = "none";
        document.getElementById('footer').style.display = "none";
    }, 1000);

    return (
        <div className="NF">
            <header className="NF-header">
                <img src={dummy} className="NF-logo" alt="No Encontrado" />
                <p className='Not-Found'>
                    <code>Uppss! Lo que buscabas no está por aquí.</code>
                </p>
                <a
                    className="NF-link"
                    href="/"
                    rel="noopener noreferrer"
                >
                    Intenta algo nuevo
                </a>
            </header>
        </div>
    );
}

export default NotFound;