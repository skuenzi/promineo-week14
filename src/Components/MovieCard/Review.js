import Stars from "./Stars"

const Review = (props) => {
    return (
        <div className="review-container">
            <h3 className='review-header'>{props.title}</h3>
            <Stars stars={props.rating}/>
            <p>{props.content}</p>
        </div>
    )
}

export default Review