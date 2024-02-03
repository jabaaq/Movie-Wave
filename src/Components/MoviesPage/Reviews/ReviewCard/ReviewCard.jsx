import "./ReviewCard.css";
import { Rate } from "antd";
import { useEffect } from "react";

const OpenUrl = ({ url }) => {
  return (
    <a className="content_url" href={url} target="_blank">
      ...See more
    </a>
  );
};

const ReviewCard = ({
  author,
  avatar,
  content,
  data,
  rating,
  username,
  url,
}) => {
  return (
    <div className="review_card">
      <div className="review_header">
        <div className="image">
          <img src={avatar} alt={`${username} avatar`} />
        </div>
        <div>
          <div className="stars">
            <Rate allowHalf disabled defaultValue={rating} />
          </div>
          <p className="review_author_name">{author}</p>
          <p className="author_username">{username}</p>
        </div>
      </div>

      <p className="review_message">
        {content.length > 250 ? (
          <>
            {content} <OpenUrl url={url} />{" "}
          </>
        ) : (
          content
        )}
      </p>
      <span className="comment_data">{data}</span>
    </div>
  );
};

export default ReviewCard;
