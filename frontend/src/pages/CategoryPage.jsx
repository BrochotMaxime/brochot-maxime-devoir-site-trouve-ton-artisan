import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ArtisanCard from '../components/common/ArtisanCard';
import Loader from '../components/common/Loader';
import ErrorMessage from '../components/common/ErrorMessage';

function CategoryPage() {
        // Récupérer l'id de la catégorie depuis les paramètres de l'URL
        const { id } = useParams();

        const [category, setCategory] = useState(null);
        const [artisans, setArtisans] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const [errorMessage, setErrorMessage] = useState('');

        useEffect(() => {
                async function fetchCategoryArtisans() {
                        try {
                                setIsLoading(true);

                                // Récupère la catégorie, ses spécialités et les artisans associés
                                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/categories/${id}/artisans`);

                                if (!response.ok) {
                                        throw new Error('Erreur lors de la récupération des artisans.');
                                }

                                const data = await response.json();

                                setCategory(data);

                                // Transforme les artisans imbriqués dans les spécialités en un tableau simple
                                const allArtisans = data.specialites.flatMap((specialite) =>
                                        specialite.artisans.map((artisan) => ({ ...artisan, specialite, }))
                                );

                                setArtisans(allArtisans);

                        } catch (error) {
                                setErrorMessage('Impossible de charger les artisans de cette catégorie.');

                        } finally {
                                setIsLoading(false);
                        }
                }

                fetchCategoryArtisans();
        }, [id]);

        return (
                <>
                        <Helmet>
                                <title>
                                        {category ? `Trouve ton artisan - ${category.nom_categorie}` : 'Trouve ton artisan - Catégorie'}
                                </title>
                                <meta
                                        name="description"
                                        content={
                                                category
                                                        ? `Découvrez les artisans de la catégorie ${category.nom_categorie} en Auvergne-Rhône-Alpes.`
                                                        : 'Découvrez les artisans disponibles en Auvergne-Rhône-Alpes.'
                                        }
                                />
                        </Helmet>

                        <section className="category-page">
                                <div className="category-page__container">
                                        {isLoading && <Loader />}

                                        {errorMessage && <ErrorMessage message={errorMessage} />}

                                        {!isLoading && !errorMessage && (
                                                <>
                                                        <h1>{category?.nom_categorie}</h1>
                                                        <p className="category-page__count">
                                                                {artisans.length} artisan{artisans.length > 1 ? 's' : ''} trouvé{artisans.length > 1 ? 's' : ''}
                                                        </p>

                                                        {artisans.length > 0 ? (
                                                                <div className="category-page__grid">
                                                                        {artisans.map((artisan) => (
                                                                                <ArtisanCard key={artisan.id_artisan} artisan={artisan} />
                                                                        ))}
                                                                </div>
                                                        ) : (
                                                                <p>Aucun artisan trouvé dans cette catégorie.</p>
                                                        )}
                                                </>
                                        )}
                                </div>
                        </section>
                </>
        );
}

export default CategoryPage;