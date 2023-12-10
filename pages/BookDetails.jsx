import { bookService } from "../services/book.service.js"
import { utilService } from "../services/util.service.js"

const { useState, useEffect } = React

export function BookDetails({ bookId, onBack }) {

    const [book, setBook] = useState(null)

    useEffect(() => {
        bookService.get(bookId)
            .then(book => setBook(book))
    }, [])


    if (!book) return <div>Loading...</div>
    const {id, title, subtitle, authors, description, language, publishedDate, pageCount, categories, listPrice, thumbnail} = book
    const {amount, currencyCode, isOnSale} = listPrice
    return (
        <section className="book-details">
            <h2>{title.toUpperCase()}</h2>
            <h3>{utilService.capitalizeFirstLetter(subtitle)}</h3>
            <h4><span>Author: </span>{authors.toString()}</h4>
            <h4><span>Categories: </span>{categories.toString()}</h4>
            <h4><span>Description: </span>{description}</h4>
            <h4><span>Language: </span>{language}</h4>
            <h4><span>Published Date: </span>{publishedDate}</h4>
            <h4><span>Page Count: </span>{pageCount}</h4>
            <h4><span>Amount Left: </span>{amount}</h4>
            <h4><span>Currency: </span>{currencyCode}</h4>
            <h4><span>Sale: </span>{isOnSale ? 'Yes' : 'No'}</h4>
            <img src={thumbnail} alt={title + ' hardcover image'}  />
            <button onClick={onBack}>Back</button>
        </section>
    )
}
