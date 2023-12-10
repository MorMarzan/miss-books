
export function BookPreview({ book }) {
    const {id, title, description, listPrice, thumbnail} = book
    // const {amount, currencyCode, isOnSale} = listPrice
    return (
        <article className="book-preview">
            <h2>{title}</h2>
            <h4>{description}</h4>
            {/* <h4><span>Amount Left: </span>{amount}</h4>
            <h4><span>Currency: </span>{currencyCode}</h4>
            <h4><span>Sale: </span>{isOnSale ? 'Yes' : 'No'}</h4> */}
            {/* <img src={`../assets/img/${book.vendor}.png`} alt="" /> */}
            <img src={thumbnail} alt={title + ' hardcover image'}  />
        </article>
    )
}