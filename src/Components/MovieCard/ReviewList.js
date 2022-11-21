import Review from "./Review";

const ReviewList = (props) => {
  const reviews = props.reviews.map((review) => (
    <Review key={review.id} {...review} />
  ));
  return (
    <div>
      <div className="reviews-container">{reviews}</div>
    </div>
  );
};

export default ReviewList;
