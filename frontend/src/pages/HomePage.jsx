import { Helmet } from 'react-helmet-async';

import HeroSection from '../components/homePage/HeroSection';
import StepsSection from '../components/homePage/StepsSection';
import TopArtisansSection from '../components/homePage/TopArtisansSection';

function HomePage() {
        return (
                <>
                        <Helmet>
                                <title>Trouve ton artisan - Accueil</title>
                                <meta
                                        name="description"
                                        content="Trouvez facilement des artisans qualifiés en Auvergne-Rhône-Alpes."
                                />
                        </Helmet>

                        <HeroSection />
                        <StepsSection />
                        <TopArtisansSection />
                </>
        );
}

export default HomePage;