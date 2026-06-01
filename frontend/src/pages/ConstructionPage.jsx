import { Helmet } from 'react-helmet-async';

function ConstructionPage({ title }) {
        return (
                <>
                        <Helmet>
                                <title>Trouve ton artisan - {title}</title>
                        </Helmet>

                        <section className="construction-page">
                                <div className="construction-page__container">
                                        <h1>{title}</h1>
                                        <img src="/images/construction.jpg" alt="Page en construction" className="construction-page__image" />
                                </div>
                        </section>
                </ >
        );
}

export default ConstructionPage;