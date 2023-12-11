
export function ReviewPreview({ review }) {
    const { fullname, rating, createdAt } = review
    return (
        <article className="review-preview">
            <p>Name: {fullname}</p>
            <p>rating: {rating}</p>
            <p>createdAt: {createdAt}</p>
        </article>
    )
}