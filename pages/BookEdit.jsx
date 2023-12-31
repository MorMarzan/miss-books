import { bookService } from "../services/book.service.js"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"

const { useNavigate, useParams } = ReactRouterDOM
const { useState, useEffect } = React


export function BookEdit() {
    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    console.log('bookToEdit:', bookToEdit)
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if (params.bookId) {
            loadBook()
        }
    }, [])

    function loadBook() {
        bookService.get(params.bookId)
            .then(setBookToEdit)
            .catch(err=>console.log('err:', err))
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;

            case 'checkbox':
                value = target.checked
                break

            default:
                break;
        }

        setBookToEdit(prevBook => ({ ...prevBook, [field]: value }))
    }

    function handlePriceChange({target}) {
        let value = +target.value
        const listPrice = {...bookToEdit.listPrice, amount:value}  
        setBookToEdit(prevBook => ({ ...prevBook, listPrice }))

    }

    function onSaveBook(ev) {
        ev.preventDefault()
        bookService.save(bookToEdit)
            .then((savedBook) => {
                console.log('savedBook',savedBook)
                showSuccessMsg(`Book successfully saved! ${savedBook.id}`)
                navigate('/book')
            })
            .catch(err => {
                console.log('err:', err)
                showErrorMsg(`An error occurred while saving the book `)
            })
    }

    const { title, description, pageCount, listPrice } = bookToEdit
    return (
        <section className="book-edit">
            <h1>Add Book</h1>
            <form onSubmit={onSaveBook}>
                <label htmlFor="title">Title</label>
                <input onChange={handleChange} value={title} type="text" name="title" id="title" />
                
                <label htmlFor="description">Description</label>
                <input onChange={handleChange} value={description} type="text" name="description" id="description" />
                
                <label htmlFor="pageCount">Page Count</label>
                <input onChange={handleChange} value={pageCount || ''} type="number" name="pageCount" id="pageCount" />

                <label htmlFor="price">Price</label>
                <input onChange={handlePriceChange} value={listPrice.amount|| ''} type="number" name="price" id="price" />
                
                <button disabled={!title}>Save</button>
            </form>

        </section>
    )
}