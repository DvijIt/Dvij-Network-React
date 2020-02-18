import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New Post</div>
      <div className={classes.posts}>
       <Post message={`Hi it's my first post`} />
       <Post message={`Hi it's my second post`} />
      </div>
    </div>
  );
};

export default MyPosts;
