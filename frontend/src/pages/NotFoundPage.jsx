import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function NotFoundPage() {
        return (
                <>
                        <Helmet>
                                <title>Trouve ton artisan - Page introuvable</title>
                                <meta name="description" content="La page demandée est introuvable." />
                        </Helmet>

                        <section className="not-found">
                                <div className="not-found__container">
                                        <img src="/images/notFound.jpg" alt="Page introuvable" className="not-found__image" />
                                        <h1>Page non trouvée</h1>
                                        <h2>La page que vous recherchez n'existe pas ou a été déplacée.</h2>
                                        <Link to="/" className="not-found__button">Retour à l'accueil</Link>
                                </div>
                        </section>
                </>
        );
}

export default NotFoundPage;