import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import ArtisanCard from '../components/homePage/ArtisanCard';
import Loader from '../components/common/Loader';
import ErrorMessage from '../components/common/ErrorMessage';

function SearchPage() {
        // Récupère le terme de recherche depuis l'URL
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

                                // Appelle l'API pour rechercher les artisans par nom
                                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/artisans/search?name=${encodeURIComponent(name)}`);

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
                <>
                        <Helmet>
                                <title>Trouve ton artisan - Recherche</title>
                                <meta
                                        name="description"
                                        content="Résultats de recherche pour les artisans."
                                />
                        </Helmet>

                        <section className="search-page">
                                <div className="search-page__container">
                                        <h1>Résultats de recherche</h1>

                                        {name && (
                                                <p className="search-page__query">
                                                        Recherche : <strong>{name}</strong>
                                                </p>
                                        )}

                                        {isLoading && <Loader />}

                                        {errorMessage && <ErrorMessage message={errorMessage} />}

                                        {!isLoading && !errorMessage && artisans.length > 0 && (
                                                <div className="search-page__grid">
                                                        {artisans.map((artisan) => (
                                                                <ArtisanCard key={artisan.id_artisan} artisan={artisan} />
                                                        ))}
                                                </div>
                                        )}

                                        {!isLoading && !errorMessage && artisans.length === 0 && (
                                                <ErrorMessage message="Aucun artisan trouvé." />
                                        )}
                                </div>
                        </section>
                </>
        );
}

export default SearchPage;