import { utilService } from "../services/util.service.js"
const { useState, useEffect } = React

export function LongTxt({ txt, length = 10 }) {

    const [showFulltxt, setShowFulltxt] = useState(false)

    const words = txt.split(/\s+/)
    let excerpt = words.slice(0, length).join(' ')
    
    if (length > words.length) return txt
    return (
        <article className="long-txt">
            {showFulltxt && 
            <React.Fragment>
                <p>{utilService.capitalizeFirstLetter(txt)}</p>
                <button onClick={() => setShowFulltxt(false)}>Read Less</button>
            </React.Fragment>
            }
            {!showFulltxt &&
            <React.Fragment>
                <p>{utilService.capitalizeFirstLetter(excerpt)}</p>
                <button onClick={() => setShowFulltxt(true)}>Read More</button>
            </React.Fragment>
            }
        </article>
    )
}