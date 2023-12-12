// import { LongTxt } from "./LongTxt.jsx"
import { bookService } from "../services/book.service.js"
import { ReviewPreview } from "./ReviewPreview.jsx"
// const { useParams } = ReactRouterDOM
// const { useState, useEffect } = React

export function ReviewList({ reviews, onRemoveReview }) {

    // const [reviews, setReviews] = useState(null)

    // const params = useParams()

    // useEffect(() => {
    //     loadReviews()
    // }, [params.bookId])

    // function loadReviews() {
    //     bookService.get(params.bookId)
    //         .then(book => {
    //             setReviews(book.reviews)
    //             console.log('reviews', book.reviews)
    //         })
    //         .catch(err => console.log('err:', err))
    // }

    // function onRemoveReview(reviewId) {

    //     bookService.removeReview(params.bookId, reviewId)
    //         .then(() => {
    //             setReviews(prevReviews => {
    //                 return prevReviews.filter(review => review.id !== reviewId)
    //             })
    //             showSuccessMsg(`Review successfully removed! ${reviewId}`)
    //         })
    //         .catch(err => {
    //             console.log('err:', err)
    //             showErrorMsg(`An error occurred while removing the review `)
    //         })

    // }

    if (!reviews) return <p>No reviews for this book.</p>

    return (
        <section>
            <ul className="review-list">
                {reviews.map(review =>
                    <li key={review.id}>
                        <ReviewPreview review={review} onRemoveReview={onRemoveReview} />
                        <section>
                            {/* <button onClick={() => onRemoveReview(review.id)}>Remove Review</button> */}
                            {/* <button><Link to={`/book/edit/${review.id}`}>Edit</Link></button> */}
                        </section>
                    </li>
                )}
            </ul>
        </section>
    )
}