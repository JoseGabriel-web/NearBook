import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getMyPosts } from "../contract";
import "../styles/profile.css";
import Loader from "./Loader";
import Post from "./Post";

const Profile = ({ accountID, wallet }) => {
  const history = useHistory();
  const [posts, setPosts] = useState()

  useEffect(() => {
    if (!accountID) {
      history.push("/");
    }
  }, [accountID]);

  useEffect(() => {
    (async () => {
      try {
        setPosts(await getMyPosts(wallet))
      } catch (err) {
        console.error(err);
      }
    })();
  });

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-picture">
          {accountID && accountID.split("")[0].toUpperCase()}
        </div>
        <div className="profile-posts-quantity">{posts && posts.length} Posts</div>
      </div>
      <div className="profile-posts">
      {posts?
          posts.map(({ id, creator, title, description, likes }) => (
            <Post
              accountID={accountID}
              id={id}
              creator={creator}
              title={title}
              description={description}
              likes={likes}
              wallet={wallet}
            />
          )) : <Loader />}
      </div>
    </div>
  );
};

export default Profile;
