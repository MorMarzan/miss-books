const { Link } = ReactRouterDOM
const { useState, useEffect } = React

import { BookList } from "../cmps/BookList.jsx"
import { bookService } from "../services/book.service.js"
import { BookFilter } from "../cmps/BookFilter.jsx"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"


export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy)
            .then(books => setBooks(books))
            .catch(err => console.log('err:', err))
    }

    function onRemoveBook(bookId) {
        // bookService.remove('adg')
        bookService.remove(bookId)
            .then(() => {
                setBooks(prevBooks => {
                    return prevBooks.filter(book => book.id !== bookId)
                })
                showSuccessMsg(`Book successfully removed! ${bookId}`)
            })
            .catch(err => {
                console.log('err:', err)
                showErrorMsg(`An error occurred while removing the book `)
            })
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    if (!books) return <div>Loading...</div>
    return (
        <section className="book-index">
            <h1>Welcome to book index!</h1>
            <BookFilter filterBy={filterBy} onSetFilter={onSetFilter} />
            <button className="add"><Link to="/book/edit">Add Book</Link></button>
            <BookList books={books} onRemoveBook={onRemoveBook} />
            {!books.length && <div> No Books found...</div>}
        </section>
    )
}