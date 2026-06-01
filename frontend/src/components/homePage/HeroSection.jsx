import { Link } from 'react-router-dom';
import background from '../../assets/background.png';

function HeroSection() {
        return (
                <section className="hero" style={{ backgroundImage: `url(${background})` }}>
                        <div className="hero__overlay">
                                <div className="hero__content">
                                        <h1>Trouver un artisan près de chez vous</h1>
                                        <p>Découvrez des artisans qualifiés de la région Auvergne-Rhône-Alpes et contactez-les facilement.</p>
                                        <Link to="/recherche" className="hero__button">Trouver un artisan</Link>
                                </div>
                        </div>
                </section>
        );
}

export default HeroSection;