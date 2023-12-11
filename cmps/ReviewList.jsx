// import { LongTxt } from "./LongTxt.jsx"
import { bookService } from "../services/book.service.js"
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

    // function onRemoveReview(reviewId) {
        
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

    // const { id, title, description, listPrice, thumbnail } = book
    return (
        <section className="review-list">
            <h1>Reviews</h1>
            <ul>
            {reviews.map(review =>
                <li key={review.id}>
                    {/* <BookPreview book={book} /> */}
                    <p>Name: {review.fullname}</p>
                    <p>rating: {review.rating}</p>
                    <p>createdAt: {review.createdAt}</p>
                    <section>
                        {/* <button onClick={() => onRemoveReview(review.id)}>Remove Review</button> */}
                        {/* <button><Link to={`/book/edit/${review.id}`}>Edit</Link></button> */}
                    </section>
                </li>
            )}
        </ul>

            {/* <h2>{title.toUpperCase()}</h2>
            {/* <h4>{description}</h4> */}
            {/* <LongTxt txt={description} /> */}
        </section>
    )
}