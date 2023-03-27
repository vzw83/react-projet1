import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  // debugger;
  return (
    <div className={s.item}>
      <img
        src="https://i.pinimg.com/originals/d0/7d/41/d07d411af3f06e16cdef348478bbc39e.jpg"
        alt="ava"
      />
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
