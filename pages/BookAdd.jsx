import { bookService } from "../services/book.service.js"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"

const { useNavigate, useParams } = ReactRouterDOM
const { useState, useEffect } = React


export function BookAdd() {
    // const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    const [options, setOptions] = useState([
        { id: '4897GH', title: 'To Kill a Mockingbird' },
        { id: 2, title: '1984' },
        { id: 3, title: 'The Great Gatsby' },
        { id: 4, title: 'Moby-Dick' },
        { id: 5, title: 'The Catcher in the Rye' },
    ])

    // console.log('bookToEdit:', bookToEdit)
    // const navigate = useNavigate()
    // const params = useParams()

    // useEffect(() => {
    //     if (params.bookId) {
    //         loadBook()
    //     }
    // }, [])

    // function loadBook() {
    //     bookService.get(params.bookId)
    //         .then(setBookToEdit)
    //         .catch(err=>console.log('err:', err))
    // }

    // function handleChange({ target }) {
    //     const field = target.name
    //     let value = target.value

    //     switch (target.type) {
    //         case 'number':
    //         case 'range':
    //             value = +value
    //             break;

    //         case 'checkbox':
    //             value = target.checked
    //             break

    //         default:
    //             break;
    //     }

    //     setBookToEdit(prevBook => ({ ...prevBook, [field]: value }))
    // }

    // function handlePriceChange({target}) {
    //     let value = +target.value
    //     const listPrice = {...bookToEdit.listPrice, amount:value}  
    //     setBookToEdit(prevBook => ({ ...prevBook, listPrice }))

    // }

    // function onSaveBook(ev) {
    //     ev.preventDefault()
    //     bookService.save(bookToEdit)
    //         .then((savedBook) => {
    //             console.log('savedBook',savedBook)
    //             showSuccessMsg(`Book successfully saved! ${savedBook.id}`)
    //             navigate('/book')
    //         })
    //         .catch(err => {
    //             console.log('err:', err)
    //             showErrorMsg(`An error occurred while saving the book `)
    //         })
    // }

    // const { title, description, pageCount, listPrice } = bookToEdit

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
            <form >
                <label htmlFor="search">Search for Book</label>
                <input placeholder="Search" type="search" name="search" id="search" />
                <button>Submit</button>
            </form>
            
            <ul>
                {options.map(opt => <li key={opt.id}>
                    {opt.title}
                    <button onClick={() => onAddBook(opt)}>+</button>
                </li>)}
            </ul>

        </section>
    )
}