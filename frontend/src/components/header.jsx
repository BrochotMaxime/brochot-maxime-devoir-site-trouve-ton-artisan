import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
        return (
                <header className="header">
                        <div className="header__container">
                                <Link to="/" className="header__logo">
                                        <img src={logo} alt="Logo Trouve ton artisan" />
                                </Link>

                                <div className="header__mobile">
                                        <button className="header__icon-button" aria-label="Rechercher">
                                                🔍
                                        </button>

                                        <button className="header__icon-button" aria-label="Ouvrir le menu">
                                                ☰
                                        </button>
                                </div>

                                <div className="header__desktop">
                                        <form className="header__search">
                                                <input
                                                        type="search"
                                                        placeholder="Rechercher un artisan"
                                                        aria-label="Rechercher un artisan"
                                                />
                                                <button type="submit" aria-label="Lancer la recherche">
                                                🔍
                                                </button>
                                        </form>

                                        <nav className="header__nav" aria-label="Navigation principale">
                                                <Link to="/categorie/1">Bâtiments</Link>
                                                <Link to="/categorie/2">Services</Link>
                                                <Link to="/categorie/3">Fabrication</Link>
                                                <Link to="/categorie/4">Alimentation</Link>
                                        </nav>
                                </div>
                        </div>
                </header>
        );
}

export default Header;