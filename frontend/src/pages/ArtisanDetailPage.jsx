import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
import RatingStars from '../components/homePage/RatingStars';
import Loader from '../components/common/Loader';
import ErrorMessage from '../components/common/ErrorMessage';

function ArtisanDetailPage() {
        const { id } = useParams();

        const [artisan, setArtisan] = useState(null);
        const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
        const [isLoading, setIsLoading] = useState(true);
        const [errorMessage, setErrorMessage] = useState('');
        const [successMessage, setSuccessMessage] = useState('');

        useEffect(() => {
                async function fetchArtisan() {
                        try {
                                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/artisans/${id}`);

                                if (!response.ok) {
                                        throw new Error('Erreur lors de la récupération de l’artisan.');
                                }

                                const data = await response.json();
                                setArtisan(data);
                        } catch (error) {
                                setErrorMessage('Impossible de charger la fiche artisan.');
                        } finally {
                                setIsLoading(false);
                        }
                }

                fetchArtisan();
        }, [id]);

        function handleChange(event) {
                const { name, value } = event.target;

                setFormData({...formData, [name]: value});
        }

        async function handleSubmit(event) {
                event.preventDefault();

                try {
                        setErrorMessage('');
                        setSuccessMessage('');

                        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
                                method: 'POST',
                                headers: {
                                        'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                        ...formData,
                                artisanId: artisan.id_artisan,
                        }),
                        });

                        const data = await response.json();

                        if (!response.ok) {
                                throw new Error(data.message);
                        }

                        setSuccessMessage(data.message);
                        setFormData({
                                name: '',
                                email: '',
                                subject: '',
                                message: '',
                        });
                } catch (error) {
                        setErrorMessage(error.message || 'Erreur lors de l’envoi du message.');
                }
        }

        if (isLoading) {
                return <Loader />;
        }

        if (!artisan) {
                return <ErrorMessage message={errorMessage} />;
        }

        return (
                <>
                        <Helmet>
                                <title>
                                        {artisan ? `Trouve ton artisan - ${artisan.nom_artisan}` : 'Trouve ton artisan - Artisan'}
                                </title>

                                <meta
                                        name="description"
                                        content={
                                                artisan
                                                        ? `Découvrez la fiche de ${artisan.nom_artisan}, artisan ${artisan.specialite?.nom_specialite} à ${artisan.ville_artisan}.`
                                                        : 'Découvrez la fiche détaillée d’un artisan.'
                                        }
                                />
                        </Helmet>

                        <section className="artisan-detail">
                                <div className="artisan-detail__container">
                                        <div className="artisan-detail__image">
                                                {artisan.image ? (
                                                        <img src={artisan.image} alt={artisan.nom_artisan} />
                                                ) : (
                                                        <span>Image artisan</span>
                                                )}
                                        </div>

                                        <div className="artisan-detail__content">
                                                <h1>{artisan.nom_artisan}</h1>

                                                <RatingStars rating={artisan.note_artisan} />

                                                <p className="artisan-detail__meta">
                                                        {artisan.specialite?.nom_specialite} — {artisan.ville_artisan}
                                                </p>

                                                <div className="artisan-detail__about">
                                                        <h2>À propos</h2>
                                                        <p>{artisan.a_propos}</p>
                                                </div>

                                                {artisan.site_web && (
                                                        <p>
                                                                <a href={artisan.site_web} target="_blank" rel="noreferrer">
                                                                        Voir le site web
                                                                </a>
                                                        </p>
                                                )}
                                        </div>
                                </div>

                                <div className="artisan-detail__contact-container">
                                        <form className="contact-form" onSubmit={handleSubmit}>
                                                <h2>Contacter cet artisan</h2>

                                                <label>
                                                        Nom *
                                                                <input
                                                                        type="text"
                                                                        name="name"
                                                                        value={formData.name}
                                                                        onChange={handleChange}
                                                                />
                                                </label>

                                                <label>
                                                        Email *
                                                                <input
                                                                        type="email"
                                                                        name="email"
                                                                        value={formData.email}
                                                                        onChange={handleChange}
                                                                />
                                                </label>

                                                <label>
                                                        Objet *
                                                                <input
                                                                        type="text"
                                                                        name="subject"
                                                                        value={formData.subject}
                                                                        onChange={handleChange}
                                                                />
                                                </label>

                                                <label>
                                                        Message *
                                                                <textarea
                                                                        name="message"
                                                                        value={formData.message}
                                                                        onChange={handleChange}
                                                                />
                                                </label>

                                                <label className="contact-form__consent">
                                                        <input type="checkbox" name="consent" required />
                                                        J'accepte les Conditions Générales d'Utilisation (CGU) *
                                                </label>

                                                {successMessage && (<p className="contact-form__success">{successMessage}</p>)}

                                                {errorMessage && (<p className="contact-form__error">{errorMessage}</p>)}

                                                <button type="submit">Envoyer</button>
                                        </form>
                                </div>
                        </section>
                </>
        );
}

export default ArtisanDetailPage;