
export function ReviewPreview({ review, onRemoveReview }) {
    const { id, fullname, rating, createdAt } = review
    return (
        <article className="review-preview">
            <p>Name: {fullname}</p>
            <p>rating: {rating}</p>
            <p>createdAt: {createdAt}</p>
            <button onClick={() => onRemoveReview(id)}>Delete</button>
        </article>
    )
}