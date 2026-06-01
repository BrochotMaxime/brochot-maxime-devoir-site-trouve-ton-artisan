import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import submitSearch from '../utils/submitSearch';
import logo from '../assets/logo.png';
import loupe from '../assets/loupe.png';
import menuBurger from '../assets/burger-bar.png';

function Header() {
        const [searchTerm, setSearchTerm] = useState('');
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const navigate = useNavigate();

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

                                        <button
                                                type="button"
                                                className="header__icon-button"
                                                aria-label="Ouvrir le menu"
                                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                        >
                                                <img src={menuBurger} alt="" />
                                        </button>
                                </div>

                                <nav className={`header__mobile-nav ${isMenuOpen ? 'is-open' : ''}`}>
                                        <Link to="/categorie/1" onClick={() => setIsMenuOpen(false)}>Bâtiment</Link>
                                        <Link to="/categorie/2" onClick={() => setIsMenuOpen(false)}>Services</Link>
                                        <Link to="/categorie/3" onClick={() => setIsMenuOpen(false)}>Fabrication</Link>
                                        <Link to="/categorie/4" onClick={() => setIsMenuOpen(false)}>Alimentation</Link>
                                </nav>

                                <div className="header__desktop">
                                        <form className="header__search" onSubmit={(event) => submitSearch(event, searchTerm, navigate, setSearchTerm)}>
                                                <input
                                                        type="search"
                                                        placeholder="Rechercher un artisan"
                                                        aria-label="Rechercher un artisan"
                                                        value={searchTerm}
                                                        onChange={(event) => setSearchTerm(event.target.value)}
                                                />

                                                <button type="submit" className="header__search-button" aria-label="Lancer la recherche">
                                                        <img src={loupe} alt="" />
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