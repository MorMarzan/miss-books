// import { LongTxt } from "./LongTxt.jsx"
import { bookService } from "../services/book.service.js"
import { ReviewPreview } from "./ReviewPreview.jsx"
const { useParams } = ReactRouterDOM
const { useState, useEffect } = React

export function ReviewList() {

    const [reviews, setReviews] = useState(null)

    const params = useParams()

    useEffect(() => {
        loadReviews()
    }, [params.bookId])

    function loadReviews() {
        bookService.get(params.bookId)
            .then(book => {
                setReviews(book.reviews)
                console.log('reviews', book.reviews)
            })
            .catch(err => console.log('err:', err))
    }

    //unfinished
    // function onRemoveReview(reviewId) {

    //     bookService.removeReview(params.bookId, reviewId)
    //         .then()

    //     bookService.remove(bookId)
    //         .then(() => {
    //             setBooks(prevBooks => {
    //                 return prevBooks.filter(book => book.id !== bookId)
    //             })
    //             showSuccessMsg(`Book successfully removed! ${bookId}`)
    //         })
    //         .catch(err => {
    //             console.log('err:', err)
    //             showErrorMsg(`An error occurred while removing the book `)
    //         })
    // }

    if (!reviews) return <p>No reviews for this book.</p>

    return (
        <section className="review-list">
            <h1>Reviews</h1>
            <ul>
                {reviews.map(review =>
                    <li key={review.id}>
                        <ReviewPreview review={review} />
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