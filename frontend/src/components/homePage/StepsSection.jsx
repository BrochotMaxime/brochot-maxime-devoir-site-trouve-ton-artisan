import StepCard from './StepCard';

// Données des étapes pour trouver un artisan
const steps = [
        {
                number: `1`,
                title: `Choisir une catégorie`,
                text: `Choisissez la catégorie d'artisanat dans le menu.`,
        },
        {
                number: `2`,
                title: `Choisir un artisan`,
                text: `Consultez un artisan dans la liste proposée.`,
        },
        {
                number: `3`,
                title: `Contacter l'artisan`,
                text: `Contactez le via le formulaire de contact.`,
        },
        {
                number: `4`,
                title: `Attendre la réponse`,
                text: `Une réponse vous sera apportée sous 48h.`,
        },
];

// Composant pour afficher les étapes pour trouver un artisan
function StepsSection() {
        return (
                <section className="steps">
                        <div className="steps__container">
                                <h2>Comment trouver mon artisan ?</h2>
                                <div className="steps__grid">
                                        {steps.map((step) => (
                                                <StepCard
                                                        key={step.number}
                                                        number={step.number}
                                                        title={step.title}
                                                        text={step.text}
                                                />
                                        ))}
                                </div>
                        </div>
                </section>
        );
}

export default StepsSection;