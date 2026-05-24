import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Footer() {
        return (
                <footer className="footer">
                        <div className="footer__container">
                                <div className="footer__top">
                                        <Link to="/" className="footer__logo">
                                                <img src={logo} alt="Logo Trouve ton artisan" />
                                        </Link>

                                        <div className="footer__infos">
                                                <p>101 cours Charlemagne</p>
                                                <p>CS 20033</p>
                                                <p>69269 LYON CEDEX 02</p>
                                                <p>France</p>
                                                <p>+33 (0)4 26 73 40 00</p>
                                        </div>
                                </div>

                                <nav className="footer__links">
                                        <Link to="/mentions-legales">Mentions légales</Link>
                                        <Link to="/donnees-personnelles">Données personnelles</Link>
                                        <Link to="/accessibilite">Accessibilité</Link>
                                        <Link to="/cookies">Cookies</Link>
                                </nav>
                        </div>
                </footer>
        );
}

export default Footer;