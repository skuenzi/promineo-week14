import {AiTwotoneStar} from 'react-icons/ai'

const ReviewForm = (props) => {
  return (
    <form className="movie-review-form">
      <input
        name="title"
        value={props.newReviewTitle}
        placeholder="Review Title"
        className="review-form-title"
        onChange={props.handleNewReviewChange}
      ></input>
      <textarea
        name="review"
        value={props.newReviewContent}
        placeholder="Write your review ..."
        className="review-form-content"
        onChange={props.handleNewReviewChange}
      ></textarea>
      <label className='review-form-stars'>
        <AiTwotoneStar style={{color: 'gold'}}/>
        <select
          name="stars"
          placeholder="Select a rating"
          value={props.newReviewStars}
          onChange={props.handleNewReviewChange}
        >
          <option value="--">--</option>

          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
      </label>
      <button
        type="button"
        className="review-form-btn"
        onClick={props.handleSubmitNewReview}
      >
        Add Review
      </button>
    </form>
  );
};

export default ReviewForm;
