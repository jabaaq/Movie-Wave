import "./ReviewCard.css";
import { Rate } from "antd";

const ReviewCard = () => {
  return (
    <div className="review_card">
      <div className="review_header">
        <div className="image"></div>
        <div>
          <div className="stars">
            <Rate allowHalf disabled defaultValue={2.5} />
          </div>
          <p className="review_author_name">John Doe</p>
        </div>
      </div>

      <p className="review_message">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        voluptatem alias ut provident sapiente repellendus.
      </p>
    </div>
  );
};

export default ReviewCard;
