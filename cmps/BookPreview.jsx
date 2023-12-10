import { LongTxt } from "./LongTxt.jsx"

export function BookPreview({ book }) {
    const { id, title, description, listPrice, thumbnail } = book
    return (
        <article className="book-preview">
            <h2>{title.toUpperCase()}</h2>
            {/* <h4>{description}</h4> */}
            <LongTxt txt={description} />
            <img src={thumbnail} alt={title + ' hardcover image'} />
        </article>
    )
}