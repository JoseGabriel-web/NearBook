import React from "react";
import "../styles/post.css";
import Liked from "../assets/Liked";
import Unliked from "../assets/Unliked";
import Trash from "../assets/Trash";
import { handlePostLike, removePost } from "../contract";

const Post = ({
  accountID,
  id,
  creator,
  title,
  description,
  likes,
  wallet,
}) => {

  const handleLike = async () => {
    console.log(id)
    try {
      await handlePostLike(wallet, { postID: id });
    } catch (err) {
      console.error(err);
    }
  };

  const handleRemovePost = async () => {
    console.log(id)
    try {
      await removePost(wallet, { postID: id });
    } catch (err) {
      console.error(err);
    }
  };

  return (
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
        <div title={likes.join(', ')} className="post-footer-like-emoji" onClick={() => handleLike()}>
          {likes.includes(accountID) ? <Liked tooltip={likes} /> : <Unliked tooltip={likes} />}
        </div>
        <div className="post-footer-like-quantity">{likes.length}</div>
        
      </div>
    </div>
  );
};

export default Post;
