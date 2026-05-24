function StepCard({ number, title, text }) {
        return (
                <article className="step-card">
                        <div className="step-card__number">{number}</div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                </article>
        );
}

export default StepCard;