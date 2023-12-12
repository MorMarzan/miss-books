import { bookService } from "../services/book.service.js"

const { useState } = React


export function AddReview({onAddReview}) {
    const [reviewToEdit, setReviewToEdit] = useState(bookService.getEmptyReview())

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

        setReviewToEdit(prevReview => ({ ...prevReview, [field]: value }))
    }

    function onSaveReview(ev) {
        ev.preventDefault()
        onAddReview(reviewToEdit)
    }

    const { fullname, rating, readAt } = reviewToEdit
    return (
        <section className="add-review">
            <h1>Add review</h1>
            <form onSubmit={onSaveReview}>
                <label htmlFor="fullname">Full Name</label>
                <input onChange={handleChange} type="text" value={fullname} name="fullname" id="fullname" />

                <label htmlFor="rating">Rating</label>
                <select onChange={handleChange} value={rating} name="rating" id="rating">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>

                <label htmlFor="readAt">Read At</label>
                <input onChange={handleChange} type="date" value={readAt} name="readAt" id="readAt" />

                <button disabled={!fullname || !rating}>Add</button>
            </form>

        </section>
    )
}