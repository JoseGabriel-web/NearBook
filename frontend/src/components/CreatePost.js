import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { createPost } from "../contract";
import "../styles/createPost.css";

const CreatePost = ({ accountID, wallet }) => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!accountID) {
      history.push("/");
    }
  }, [accountID]);

  const handleCreatePost = async () => {
    if (title.length > 0 && description.length > 0) {
      try {
        await createPost(wallet, { title, description });
        history.push("/feed");
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="create-post-wrapper">
      <div className="create-post-container">
        <div className="create-post-header">create a post</div>

        <div className="create-post-content">
          <label>Title:</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <label>Description:</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>

        <div className="create-post-footer">
          <div
            className="create-post-post-btn button"
            onClick={() => handleCreatePost()}
          >
            post
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
