import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
// var gFilterBy = { txt: '', minSpeed: 0 }
_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    // getNextBookId,
    // getFilterBy,
    // setFilterBy
}

function query() {
    return storageService.query(BOOK_KEY)
        .then(books => {
            // if (gFilterBy.txt) {
            //     const regex = new RegExp(gFilterBy.txt, 'i')
            //     books = books.filter(book => regex.test(book.vendor))
            // }
            // if (gFilterBy.minSpeed) {
            //     books = books.filter(book => book.maxSpeed >= gFilterBy.minSpeed)
            // }
            return books
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook(title = '', description = '') {
    return {
        id: '',
        title,
        description,
        // thumbnail: '',
        listPrice: {
            amount: 0,
            currencyCode: '',
            isOnSale: ''
        }

    }
}

// function getFilterBy() {
//     return { ...gFilterBy }
// }

// function setFilterBy(filterBy = {}) {
//     if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt
//     if (filterBy.minSpeed !== undefined) gFilterBy.minSpeed = filterBy.minSpeed
//     return gFilterBy
// }

// function getNextBookId(bookId) {
//     return storageService.query(BOOK_KEY)
//         .then(books => {
//             let nextBookIdx = books.findIndex(book => book.id === bookId) + 1
//             if (nextBookIdx === books.length) nextBookIdx = 0
//             return books[nextBookIdx].id
//         })
// }

function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        _createDemoBooks()
    }
}

function _createDemoBooks() {
    const bookNames = [
        "The Great Gatsby",
        "One Hundred Years of Solitude",
        "The Lord of the Rings",
        "Pride and Prejudice"
    ]
    const currencyCodes = ["USD", "EUR", "JPY", "GBP", "AUD"]

    const books = bookNames.map(bookName => {
        const book = _createBook(bookName, utilService.makeLorem(15))
        book.listPrice.amount = utilService.getRandomIntInclusive(0, 101)
        book.listPrice.currencyCode = currencyCodes[utilService.getRandomIntInclusive(0, currencyCodes.length - 1)]
        book.listPrice.isOnSale = Math.random() < 0.5
        return book
    })

    utilService.saveToStorage(BOOK_KEY, books)
}


function _createBook(title, description) {
    const book = getEmptyBook(title, description)
    book.id = utilService.makeId()
    return book
}