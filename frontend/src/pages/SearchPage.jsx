import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import ArtisanCard from '../components/homePage/ArtisanCard';

function SearchPage() {
        const [searchParams] = useSearchParams();
        const name = searchParams.get('name');

        const [artisans, setArtisans] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const [errorMessage, setErrorMessage] = useState('');

        useEffect(() => {
                async function fetchSearchResults() {
                        try {
                                setIsLoading(true);
                                setErrorMessage('');

                                if (!name) {
                                        setArtisans([]);
                                        return;
                                }

                                const response = await fetch(
                                        `http://localhost:3000/api/artisans/search?name=${encodeURIComponent(name)}`
                                );

                                if (!response.ok) {
                                        throw new Error('Erreur lors de la recherche.');
                                }

                                const data = await response.json();
                                setArtisans(data);
                        } catch (error) {
                                setErrorMessage('Impossible de charger les résultats de recherche.');
                        } finally {
                                setIsLoading(false);
                        }
                }

                fetchSearchResults();
        }, [name]);

        return (
                <section className="search-page">
                        <div className="search-page__container">
                                <h1>Résultats de recherche</h1>

                                {name && (
                                        <p className="search-page__query">
                                                Recherche : <strong>{name}</strong>
                                        </p>
                                )}

                                {isLoading && <p>Chargement...</p>}

                                {errorMessage && <p>{errorMessage}</p>}

                                {!isLoading && !errorMessage && artisans.length > 0 && (
                                        <div className="search-page__grid">
                                                {artisans.map((artisan) => (
                                                        <ArtisanCard key={artisan.id_artisan} artisan={artisan} />
                                                ))}
                                        </div>
                                )}

                                {!isLoading && !errorMessage && artisans.length === 0 && (
                                        <p>Aucun artisan trouvé.</p>
                                )}
                        </div>
                </section>
        );
}

export default SearchPage;