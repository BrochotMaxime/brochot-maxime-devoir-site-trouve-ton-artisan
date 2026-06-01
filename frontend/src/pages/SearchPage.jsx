import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import submitSearch from '../utils/submitSearch';
import loupe from '../assets/loupe.png';
import ArtisanCard from '../components/common/ArtisanCard';
import Loader from '../components/common/Loader';
import ErrorMessage from '../components/common/ErrorMessage';

function SearchPage() {
        // Récupère le terme de recherche depuis l'URL
        const navigate = useNavigate();
        const [searchParams] = useSearchParams();
        const name = searchParams.get('name');

        const [searchTerm, setSearchTerm] = useState('');
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

                                        <form className="search-page__search" onSubmit={(event) => submitSearch(event, searchTerm, navigate, setSearchTerm)}>
                                                <input
                                                        type="search"
                                                        placeholder="Rechercher un artisan"
                                                        aria-label="Rechercher un artisan"
                                                        value={searchTerm}
                                                        onChange={(event) => setSearchTerm(event.target.value)}
                                                />

                                                <button type="submit" className="search-page__search-button" aria-label="Lancer la recherche">
                                                        <img src={loupe} alt="" />
                                                </button>
                                        </form>

                                        {!isLoading && !errorMessage && artisans.length > 0 && (
                                                <div className="search-page__grid">
                                                        {artisans.map((artisan) => (
                                                                <ArtisanCard key={artisan.id_artisan} artisan={artisan} />
                                                        ))}
                                                </div>
                                        )}

                                        {!name && (
                                                <p>
                                                        Saisissez le nom d'un artisan pour commencer votre recherche.
                                                </p>
                                        )}

                                        {!isLoading && !errorMessage && name && artisans.length === 0 && (
                                                <ErrorMessage message="Aucun artisan trouvé." />
                                        )}
                                </div>
                        </section>
                </>
        );
}

export default SearchPage;