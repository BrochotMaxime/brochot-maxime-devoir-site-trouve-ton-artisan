import { Helmet } from 'react-helmet-async';
import constructionIcon from '../../public/images/construction.jpg';

function ConstructionPage({ title }) {
        return (
                <>
                        <Helmet>
                                <title>Trouve ton artisan - {title}</title>
                        </Helmet>

                        <section className="construction-page">
                                <div className="construction-page__container">
                                        <h1>{title}</h1>
                                        <img src={constructionIcon} alt="Page en construction" className="construction-page__image" />
                                </div>
                        </section>
                </ >
        );
}

export default ConstructionPage;