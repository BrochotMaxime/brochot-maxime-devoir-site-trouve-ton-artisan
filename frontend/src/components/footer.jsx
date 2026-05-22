import { Link } from 'react-router-dom';

function Footer() {
        return (
                <footer className="bg-dark text-white py-4 mt-5">
                        <div className="container">
                                <p className="fw-bold mb-2">Région Auvergne-Rhône-Alpes</p>

                                <p className="mb-1">101 cours Charlemagne</p>
                                <p className="mb-1">CS 20033</p>
                                <p className="mb-1">69269 LYON CEDEX 02</p>
                                <p className="mb-3">France</p>
                                <p className="mb-3">+33 (0)4 26 73 40 00</p>

                                <nav>
                                        <Link to="/mentions-legales" className="text-white me-3">
                                                Mentions légales
                                        </Link>
                                        <Link to="/donnees-personnelles" className="text-white me-3">
                                                Données personnelles
                                        </Link>
                                        <Link to="/accessibilite" className="text-white me-3">
                                                Accessibilité
                                        </Link>
                                        <Link to="/cookies" className="text-white">
                                                Cookies
                                        </Link>
                                </nav>
                        </div>
                </footer>
        );
}

export default Footer;