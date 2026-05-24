import { useEffect, useState } from 'react';
import ArtisanCard from './ArtisanCard';

function TopArtisansSection() {
        const [artisans, setArtisans] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const [errorMessage, setErrorMessage] = useState('');

        useEffect(() => {
                async function fetchTopArtisans() {
                        try {
                                const response = await fetch('http://localhost:3000/api/artisans/top');

                                if (!response.ok) {
                                        throw new Error('Erreur lors de la récupération des artisans.');
                                }

                                const data = await response.json();
                                setArtisans(data);
                        } catch (error) {
                                setErrorMessage('Impossible de charger les artisans du mois.');
                        } finally {
                                setIsLoading(false);
                        }
                }

                fetchTopArtisans();
        }, []);

        return (
                <section className="top-artisans">
                        <div className="top-artisans__container">
                                <h2>Les artisans du mois</h2>

                                {isLoading && <p>Chargement...</p>}

                                {errorMessage && <p>{errorMessage}</p>}

                                {!isLoading && !errorMessage && (
                                        <div className="top-artisans__grid">
                                                {artisans.map((artisan) => (
                                                        <ArtisanCard key={artisan.id_artisan} artisan={artisan} />
                                                ))}
                                        </div>
                                )}
                        </div>
                </section>
        );
}

export default TopArtisansSection;