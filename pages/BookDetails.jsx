import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React

export function BookDetails({ bookId, onBack }) {

    const [book, setBook] = useState(null)

    useEffect(() => {
        bookService.get(bookId)
            .then(book => setBook(book))
    }, [])


    if (!book) return <div>Loading...</div>
    const {id, title, description, listPrice, thumbnail} = book
    const {amount, currencyCode, isOnSale} = listPrice
    return (
        <section className="book-details">
            <h2>{title}</h2>
            <h4><span>Description: </span>{description}</h4>
            <h4><span>Amount Left: </span>{amount}</h4>
            <h4><span>Currency: </span>{currencyCode}</h4>
            <h4><span>Sale: </span>{isOnSale ? 'Yes' : 'No'}</h4>
            <img src={thumbnail} alt={title + ' hardcover image'}  />
            <button onClick={onBack}>Back</button>
        </section>
    )
}
