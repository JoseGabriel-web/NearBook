import React from "react";
import "../styles/comment.css";
import { removeComment } from "../contract";
import Trash from "../assets/Trash";

const Comment = ({
  wallet,
  accountID,
  commentID,
  creator,
  label,
  postID,
}) => {
  const handleRemoveComment = async () => {
    console.log(commentID);
    try {
      await removeComment(wallet, { postID, commentID });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="comment-wrapper">
      <div className="comment-header">
        <div className="comment-header-avatar">
          {creator.split("")[0].toUpperCase()}
        </div>
        <div className="comment-header-creator-name">{creator}</div>
        {accountID === creator && (
          <div
            className="comment-header-delete-btn"
            onClick={() => handleRemoveComment()}
          >
            <Trash />
          </div>
        )}
      </div>
      <div className="comment-label">
            {label}
      </div>
    </div>
  );
};

export default Comment;
