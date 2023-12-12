import { ReviewList } from "../cmps/ReviewList.jsx"
import { AddReview } from "../cmps/AddReview.jsx"
import { bookService } from "../services/book.service.js"
import { utilService } from "../services/util.service.js"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"

const { useParams, useNavigate, Link } = ReactRouterDOM
const { useState, useEffect } = React

export function BookDetails() {

    const [book, setBook] = useState(null)
    const [isReview, setIsReview] = useState(false)
    const navigate = useNavigate()
    const { bookId } = useParams()

    useEffect(() => {
        loadBook()
    }, [bookId])

    function loadBook() {
        bookService.get(bookId)
            .then(book => setBook(book))
            .catch(err => {
                console.log('err:', err)
                navigate('/')
            })
    }

    function onBack() {
        navigate('/book')
    }

    function onAddReview(reviewToAdd) {
        bookService.addReview(bookId, reviewToAdd)
            .then((updatedBook) => {
                setBook(updatedBook)
                setIsReview(false)
                showSuccessMsg(`Review successfully saved! ${updatedBook.id}`)
            })
            .catch(err => {
                console.log('err:', err)
                showErrorMsg(`An error occurred while saving the review `)
            })
    }

    function onRemoveReview(reviewId) {
        bookService.removeReview(bookId, reviewId)
            .then(savedBook => {
                setBook(savedBook)
                showSuccessMsg('Review deleted successfully')
            })
            .catch(err => {
                console.log('err:', err)
                showErrorMsg('Error deleting review')
                navigate('/book')
            })
    }


    if (!book) return <div>Loading...</div>
    const { id, title, subtitle, authors, description, language, publishedDate, pageCount, categories, listPrice, thumbnail } = book
    const { amount, currencyCode, isOnSale } = listPrice

    let readingLevel
    if (pageCount > 500) {
        readingLevel = 'Serious Reading';
    } else if (pageCount > 200) {
        readingLevel = 'Decent Reading';
    } else {
        readingLevel = 'Light Reading';
    }

    const currYear = new Date().getFullYear();
    const yearDiff = currYear - publishedDate;
    let bookAge
    if (yearDiff > 10) {
        bookAge = 'Vintage';
    } else if (yearDiff < 1) {
        bookAge = 'New';
    } else {
        bookAge = '';
    }

    return (
        <section className="book-details">
            <h2>{title.toUpperCase()} {isOnSale && <span className="sale-tag">SALE!!!</span>}</h2>
            <h3>{utilService.capitalizeFirstLetter(subtitle)}</h3>
            <h4><span>Author: </span>{authors.toString()}</h4>
            <h4><span>Categories: </span>{categories.toString()}</h4>
            <h4><span>Description: </span>{description}</h4>
            <h4><span>Language: </span>{language}</h4>
            <h4><span>Published Date: </span>{publishedDate} <span className="tag">{bookAge}</span></h4>
            <h4><span>Page Count: </span>{pageCount} <span className="tag">{readingLevel}</span></h4>
            <h4><span>Amount Left: </span>{amount}</h4>
            <h4><span>Currency: </span>{currencyCode}</h4>
            <h4><span>Sale: </span>{isOnSale ? 'Yes' : 'No'}</h4>
            <img src={thumbnail} alt={title + ' hardcover image'} />

            <h3>Book's Reviews</h3>
            <ReviewList reviews={book.reviews} onRemoveReview={onRemoveReview} />
            <button onClick={() => setIsReview(!isReview)}>Add Review</button>
            {isReview && <AddReview onAddReview={onAddReview} />}
            {/* <AddReview onAddReview={onAddReview} /> */}

            <button onClick={onBack}>Back</button>
        </section>
    )
}
