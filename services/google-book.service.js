// import { utilService } from './util.service.js'

export const googlBookService = {
    query,
}

const GOOGLE_BOOKS_URL = "https://www.googleapis.com/books/v1/volumes?printType=books&q=harrypotter"

function query() {

    
    return storageService.query(BOOK_KEY)
        .then(books => {return books})
}