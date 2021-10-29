import React, { useEffect, useState } from "react";
import "../styles/feed.css";
import { useHistory } from "react-router";
import Post from "../components/Post";
import { getPosts } from "../contract";
import Loader from "./Loader";

const Feed = ({ accountID, wallet }) => {
  const [posts, setPosts] = useState();
  const history = useHistory();

  useEffect(() => {
    if (!accountID) {
      history.push("/");
    }
  }, [accountID]);

  useEffect(() => {
    (async () => {
      try {
        setPosts(await getPosts(wallet))
      } catch (err) {
        console.error(err);
      }
    })();
  });

  return (
    <div className="feed">
      <div className="posts-container">
        {posts?
          posts.map(({ id, creator, title, description, likes, comments }) => (
            <Post
              accountID={accountID}
              id={id}
              creator={creator}
              title={title}
              description={description}
              likes={likes}
              comments={comments}
              wallet={wallet}
            />
          )) : <Loader />}
      </div>
    </div>
  );
};

export default Feed;
