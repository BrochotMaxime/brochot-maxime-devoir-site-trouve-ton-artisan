function RatingStars({ rating }) {
        const roundedRating = Math.round(Number(rating));

        return (
                <div className="rating-stars" aria-label={`Note : ${rating} sur 5`}>
                        {Array.from({ length: 5 }, (_, index) => (
                                <span key={index}>
                                        {index < roundedRating ? '★' : '☆'}
                                </span>
                        ))}
                </div>
        );
}

export default RatingStars;