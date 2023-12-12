
export const googlBookService = {
    query,
}

const GOOGLE_BOOKS_URL = "https://www.googleapis.com/books/v1/volumes?printType=books&q="

// const GOOGLE_BOOKS_URL = "https://www.googleapis.com/books/v1/volumes?printType=books&q=harrypotter"

function query(searchVal) {
    // return Promise.resolve(demoGoogleBooks)
    console.log(GOOGLE_BOOKS_URL + searchVal)
    return axios.get(GOOGLE_BOOKS_URL + searchVal)
        .then(res => {
            console.log('req!')
            return res.data.items
        })
        .catch(err => console.log('err:', err))

}

const demoGoogleBooks = [
    {
        "kind": "books#volume",
        "id": "Gz8t2MttEQUC",
        "etag": "Betuo4wsmPs",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/Gz8t2MttEQUC",
        "volumeInfo": {
            "title": "Harry Potter and Philosophy",
            "subtitle": "If Aristotle Ran Hogwarts",
            "authors": [
                "David Baggett"
            ],
            "publisher": "Open Court Publishing",
            "publishedDate": "2004",
            "description": "In 'Harry Potter and Philosophy', 17 philosophical experts unlock some of Hogwarts' secret panels, and uncover surprising insights that are enlightening both for wizards and the most discerning muggles.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9780812694550"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "0812694554"
                }
            ],
            "readingModes": {
                "text": true,
                "image": true
            },
            "pageCount": 266,
            "printType": "BOOK",
            "categories": [
                "Literary Criticism"
            ],
            "averageRating": 5,
            "ratingsCount": 1,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "1.3.4.0.preview.3",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=Gz8t2MttEQUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=Gz8t2MttEQUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=Gz8t2MttEQUC&printsec=frontcover&dq=harrypotter&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=Gz8t2MttEQUC&dq=harrypotter&hl=&as_pt=BOOKS&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_Philosophy.html?hl=&id=Gz8t2MttEQUC"
        },
        "saleInfo": {
            "country": "IL",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
        "accessInfo": {
            "country": "IL",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Harry_Potter_and_Philosophy-sample-epub.acsm?id=Gz8t2MttEQUC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/Harry_Potter_and_Philosophy-sample-pdf.acsm?id=Gz8t2MttEQUC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=Gz8t2MttEQUC&hl=&as_pt=BOOKS&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "All the pages of this book are acid-free and have been individually bewitched with an anti-befuddlement incantation. Don&#39;t forget to keep your wand primed and read between the lines."
        }
    },
    {
        "kind": "books#volume",
        "id": "BoX-6R21MgQC",
        "etag": "staXkeRKfl8",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/BoX-6R21MgQC",
        "volumeInfo": {
            "title": "The Psychology of Harry Potter",
            "subtitle": "An Unauthorized Examination Of The Boy Who Lived",
            "authors": [
                "Neil Mulholland"
            ],
            "publisher": "BenBella Books, Inc.",
            "publishedDate": "2007-04-10",
            "description": "Harry Potter has provided a portal to the wizarding world for millions of readers, but an examination of Harry, his friends and his enemies will take us on yet another journey: through the psyche of the Muggle (and wizard!) mind. The twists and turns of the series, as well as the psychological depth and complexity of J. K. Rowling’s characters, have kept fans enthralled with and puzzling over the many mysteries that permeate Hogwarts and beyond: • Do the Harry Potter books encourage disobedience? • Why is everyone so fascinated by Professor Lupin? • What exactly will Harry and his friends do when they finally pass those N.E.W.T.s? • Do even wizards live by the ticking of the clock? • Is Harry destined to end up alone? And why did it take Ron and Hermione so long to get together? Now, in The Psychology of Harry Potter, leading psychologists delve into the ultimate Chamber of Secrets, analyzing human mind and motivation by examining the themes and characters that make the Harry Potter books the bestselling fantasy series of all time. Grab a spot on the nearest couch, and settle in for some fresh revelations about our favorite young wizard!",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9781935251378"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "1935251376"
                }
            ],
            "readingModes": {
                "text": true,
                "image": true
            },
            "pageCount": 338,
            "printType": "BOOK",
            "categories": [
                "Literary Criticism"
            ],
            "averageRating": 3.5,
            "ratingsCount": 4,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "2.3.4.0.preview.3",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=BoX-6R21MgQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=BoX-6R21MgQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=BoX-6R21MgQC&printsec=frontcover&dq=harrypotter&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=BoX-6R21MgQC&dq=harrypotter&hl=&as_pt=BOOKS&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/The_Psychology_of_Harry_Potter.html?hl=&id=BoX-6R21MgQC"
        },
        "saleInfo": {
            "country": "IL",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
        "accessInfo": {
            "country": "IL",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/The_Psychology_of_Harry_Potter-sample-epub.acsm?id=BoX-6R21MgQC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/The_Psychology_of_Harry_Potter-sample-pdf.acsm?id=BoX-6R21MgQC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=BoX-6R21MgQC&hl=&as_pt=BOOKS&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "Now, in The Psychology of Harry Potter, leading psychologists delve into the ultimate Chamber of Secrets, analyzing human mind and motivation by examining the themes and characters that make the Harry Potter books the bestselling fantasy ..."
        }
    },
    {
        "kind": "books#volume",
        "id": "H5mI2wcC7vgC",
        "etag": "9jxO0ywauz8",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/H5mI2wcC7vgC",
        "volumeInfo": {
            "title": "Harry Potter and the Prisoner of Azkaban",
            "authors": [
                "J. K. Rowling"
            ],
            "publishedDate": "1999",
            "description": "Harry Potter must confront the devious and dangerous wizard responsible for his parents' deaths.",
            "industryIdentifiers": [
                {
                    "type": "OTHER",
                    "identifier": "UCSD:31822036736650"
                }
            ],
            "readingModes": {
                "text": false,
                "image": false
            },
            "pageCount": 775,
            "printType": "BOOK",
            "categories": [
                "Children's stories"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.3.2.0.preview.0",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=H5mI2wcC7vgC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=H5mI2wcC7vgC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=H5mI2wcC7vgC&q=harrypotter&dq=harrypotter&hl=&as_pt=BOOKS&cd=3&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=H5mI2wcC7vgC&dq=harrypotter&hl=&as_pt=BOOKS&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_the_Prisoner_of_Azkaban.html?hl=&id=H5mI2wcC7vgC"
        },
        "saleInfo": {
            "country": "IL",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
        "accessInfo": {
            "country": "IL",
            "viewability": "NO_PAGES",
            "embeddable": false,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": false
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=H5mI2wcC7vgC&hl=&as_pt=BOOKS&source=gbs_api",
            "accessViewStatus": "NONE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "Harry Potter must confront the devious and dangerous wizard responsible for his parents&#39; deaths."
        }

    }
]