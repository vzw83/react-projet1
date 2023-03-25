import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="https://i.pinimg.com/originals/d0/7d/41/d07d411af3f06e16cdef348478bbc39e.jpg"
        alt="ava"
      />
      post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
