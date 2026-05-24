import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import loupe from '../assets/loupe.png';
import menuBurger from '../assets/burger-bar.png';

function Header() {
        return (
                <header className="header">
                        <div className="header__container">
                                <Link to="/" className="header__logo">
                                        <img src={logo} alt="Logo Trouve ton artisan" />
                                </Link>

                                <div className="header__mobile">
                                        <Link to="/recherche" className="header__icon-button" aria-label="Rechercher un artisan">
                                                <img src={loupe} alt="Loupe rechercher" />
                                        </Link>

                                        <Link to="#" className="header__icon-button" aria-label="Menu de navigation">
                                                <img src={menuBurger} alt="Menu burger" />
                                        </Link>
                                </div>

                                <div className="header__desktop">
                                        <form className="header__search">
                                                <input type="search" placeholder="Rechercher un artisan" aria-label="Rechercher un artisan" />
                                                <Link to="/recherche" className="header__icon-button" aria-label="Rechercher un artisan">
                                                        <img src={loupe} alt="Loupe rechercher" />
                                                </Link>
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