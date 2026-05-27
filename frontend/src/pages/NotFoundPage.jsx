import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function NotFoundPage() {
        return
                <section className="not-found">
                        <Helmet>
                                <title>Trouve ton artisan - Page non trouvée</title>
                                <meta
                                        name="description"
                                        content="La page que vous recherchez n'existe pas."
                                />
                        </Helmet>
                        
                        <div className="not-found__container">
                                <h1>Erreur 404</h1>
                                <p>La page demandée n'existe pas.</p>
                                <Link to="/">Retour à l'accueil</Link>
                        </div>
                </section>
}

export default NotFoundPage;