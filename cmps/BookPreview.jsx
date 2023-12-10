
export function BookPreview({ book }) {
    const {id, title, description, listPrice, thumbnail} = book
    return (
        <article className="book-preview">
            <h2>{title}</h2>
            <h4>{description}</h4>
            <img src={thumbnail} alt={title + ' hardcover image'}  />
        </article>
    )
}