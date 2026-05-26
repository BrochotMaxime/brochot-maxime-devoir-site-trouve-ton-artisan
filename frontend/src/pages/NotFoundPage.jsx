import { Helmet } from 'react-helmet-async';

function NotFoundPage() {
        return 
                <>
                        <Helmet>
                                <title>Trouve ton artisan - Page non trouvée</title>
                                <meta
                                        name="description"
                                        content="La page que vous recherchez n'existe pas."
                                />
                        </Helmet>

                        <h1>Page non trouvée</h1>
                </>
}

export default NotFoundPage;