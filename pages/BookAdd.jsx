import { bookService } from "../services/book.service.js"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"
import { googlBookService } from "../services/google-book.service.js"
import { utilService } from "../services/util.service.js"

// const { useNavigate, useParams } = ReactRouterDOM
const { useState, useEffect, useRef } = React


export function BookAdd() {
    const [googleBooks, setGoogleBooks] = useState(null)
    const [searchTxtToEdit, setSearchTxtToEdit] = useState('')
    // const debouncedLoadGoogleBooks = useRef(utilService.debounce(loadGoogleBooks, 1500))
    const debouncedLoadGoogleBooks = (utilService.debounce(loadGoogleBooks, 1500))
    // const debouncedLoadGoogleBooks = useRef(utilService.debounce(loadGoogleBooks, 1500)).current


    function loadGoogleBooks(ev) {
        if (!searchTxtToEdit.trim()) return
        // ev.preventDefault()
        // googlBookService.query(search)
        googlBookService.query(searchTxtToEdit)
            .then(setGoogleBooks)
            .catch(console.log)
    }

    function handleInputChange(ev) {
        setSearchTxtToEdit(ev.target.value)
        // utilService.debounce(loadGoogleBooks, 300)
        // debouncedLoadGoogleBooks.current()
        debouncedLoadGoogleBooks()
        // loadGoogleBooks()
    }

    function onAddBook(book) {
        bookService.addGoogleBook(book)
            .then(console.log)
            .catch(err => {
                console.log('err:', err)
            })
    }


    return (
        <section className="book-edit">
            <h1>Add Book</h1>
            <form>
            {/* <form onSubmit={loadGoogleBooks}> */}
                <label htmlFor="search">Search for Book</label>
                <input value={searchTxtToEdit} onChange={handleInputChange} placeholder="Search" type="search" name="search" id="search" />
                {/* <button>Submit</button> */}
            </form>

            {googleBooks && googleBooks.length &&
            <ul className="google-book-list">
                {googleBooks.map(book =>
                    <li key={book.id}>
                        {book.volumeInfo.title}
                        <button onClick={() => onAddBook(book)}>+</button>
                    </li>
                    )}
            </ul>
            }
    
        </section>
    )
}