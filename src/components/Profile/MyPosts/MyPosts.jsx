import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Жмии</button>
      </div>
      <div className={s.posts}>        
        <Post message="Привет, как твои дела?" />
        <Post message="привет, это мой певый пост!"/>
      </div>
    </div>
  );
};

export default MyPosts;
