import { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import Stars from "./Stars";

const MovieCard = (props) => {
  const reviews = props.reviews
  const [showReviews, setShowReviews] = useState(false);
  const [showNewReviewForm, setShowNewReviewForm] = useState(false);
  const [newReviewTitle, setNewReviewTitle] = useState("");
  const [newReviewContent, setNewReviewContent] = useState("");
  const [newReviewStars, setNewReviewStars] = useState();

  const handleNewReviewChange = (e) => {
    setShowReviews(false)
    if (e.target.name === 'title') {
      setNewReviewTitle(e.target.value)
    }
    if (e.target.name === 'review') {
      setNewReviewContent(e.target.value)
    }
    if (e.target.name === 'stars') {
      setNewReviewStars(e.target.value)
    }
  };

  const handleSubmitNewReview = () => {
    reviews.unshift({
      id: reviews.length + 1,
      author: 'currentUser',
      title: newReviewTitle,
      content: newReviewContent,
      rating: newReviewStars
    })
    setShowReviews(true)
    setNewReviewContent('')
    setNewReviewTitle('')
    setNewReviewStars('--')
  };

  return (
    <div>
      <article className="movie-card">
        <h3 className="movie-card-title">{props.title}</h3>
        <p className="movie-card-synopsis">{props.synopsis}</p>
        <img
          className="movie-card-poster"
          src={props.poster}
          alt={props.title}
        />
        <Stars stars={props.score} />
        <button
          className="see-reviews-btn"
          onClick={() => setShowReviews(!showReviews)}
        >
          {showReviews ? "hide reviews..." : "show reviews..."}
        </button>
        <button
          className="leave-review-btn"
          onClick={() => setShowNewReviewForm(!showNewReviewForm)}
        >
          leave a review
        </button>
      </article>
      {showNewReviewForm && (
        <ReviewForm
          newReviewTitle={newReviewTitle}
          setNewReviewTitle={setNewReviewTitle}
          newReviewContent={newReviewContent}
          setNewReviewContent={setNewReviewContent}
          newReviewStars={newReviewStars}
          setNewReviewStars={setNewReviewStars}
          handleNewReviewChange={handleNewReviewChange}
          handleSubmitNewReview={handleSubmitNewReview}
        />
      )}

      {showReviews && <ReviewList reviews={reviews} />}
    </div>
  );
};

export default MovieCard;
