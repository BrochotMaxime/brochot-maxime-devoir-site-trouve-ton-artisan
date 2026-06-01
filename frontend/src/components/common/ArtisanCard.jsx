import { Link } from 'react-router-dom';
import RatingStars from '../homePage/RatingStars';

function ArtisanCard({ artisan }) {
        return (
                <article className="artisan-card">
                        <div className="artisan-card__image">
                                {artisan.image ? (
                                        <img src={artisan.image} alt={artisan.nom_artisan} />
                                ) : (
                                        <span>Image artisan</span>
                                )}
                        </div>

                        <div className="artisan-card__content">
                                <h3>{artisan.nom_artisan}</h3>

                                <RatingStars rating={artisan.note_artisan} />

                                <p>{artisan.specialite?.nom_specialite}</p>
                                <p>{artisan.ville_artisan}</p>

                                <Link to={`/artisan/${artisan.id_artisan}`} className="artisan-card__link">Voir la fiche</Link>
                        </div>
                </article>
        );
}

export default ArtisanCard;