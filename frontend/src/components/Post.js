import React, { useState } from "react";
import "../styles/post.css";
import Liked from "../assets/Liked";
import Unliked from "../assets/Unliked";
import Trash from "../assets/Trash";
import { addComment, handlePostLike, removePost } from "../contract";
import CommentIcon from "../assets/CommentIcon";
import Comment from "./Comment";

const Post = ({
  accountID,
  id,
  creator,
  title,
  description,
  likes,
  comments,
  wallet,
}) => {
  const [commentLabel, setCommentLabel] = useState("");

  const handleAddComment = async () => {
    if (commentLabel.length > 0) {
      try {
        await addComment(wallet, { postID: id, label: commentLabel });
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleLike = async () => {
    console.log(id);
    try {
      await handlePostLike(wallet, { postID: id });
    } catch (err) {
      console.error(err);
    }
  };

  const handleRemovePost = async () => {
    console.log(id);
    try {
      await removePost(wallet, { postID: id });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="post-wrapper">
      <div className="post-container" key={id}>
        <div className="post-header">
          <div className="post-header-avatar">
            {creator.split("")[0].toUpperCase()}
          </div>
          <div className="post-header-creator-name">{creator}</div>
          {accountID === creator && (
            <div
              className="post-header-delete-btn"
              onClick={() => handleRemovePost()}
            >
              <Trash />
            </div>
          )}
        </div>
        <div className="post-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className="post-footer">
          <div
            title={likes.join(", ")}
            className="post-footer-like-emoji"
            onClick={() => handleLike()}
          >
            {likes.includes(accountID) ? (
              <Liked tooltip={likes} />
            ) : (
              <Unliked tooltip={likes} />
            )}
          </div>
          <div className="post-footer-like-quantity">{likes && likes.length}</div>
          <div className="spacer" />
          <div className="post-footer-comments-emoji-and-quantity">
            <div className="post-footer-comments-quantity">
              {comments && comments.length}
            </div>
            <CommentIcon />
          </div>
        </div>
      </div>
      <div className="comment-input-wrapper">
        <input
          type="text"
          placeholder="Add a comment"
          onChange={(e) => setCommentLabel(e.target.value)}
          value={commentLabel}
        />
        <div className="comment-add-button" onClick={() => handleAddComment()}>
          +
        </div>
      </div>
      <div
        data-has-comments={comments && comments?.length > 0}
        className="post-comments-section"
      >
        {comments && comments.length > 0 &&
          comments.map(({ commentID, creator, label }) => (
            <Comment
              wallet={wallet}
              accountID={accountID}
              id={commentID}
              creator={creator}
              label={label}
              postID={id}
            />
          ))}
      </div>
    </div>
  );
};

export default Post;
