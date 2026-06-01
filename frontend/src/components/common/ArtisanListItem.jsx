import { Link } from 'react-router-dom';

import RatingStars from './RatingStars';

function ArtisanListItem({ artisan }) {
        return (
                <article className="artisan-list-item">
                        <div className="artisan-list-item__content">
                                <h3>{artisan.nom_artisan}</h3>
                                <RatingStars rating={artisan.note_artisan} />
                                <p>{artisan.specialite?.nom_specialite}</p>
                                <p>{artisan.ville_artisan}</p>
                        </div>

                        <Link to={`/artisan/${artisan.id_artisan}`} className="artisan-list-item__button">Voir la fiche</Link>
                </article>
        );
}

export default ArtisanListItem;