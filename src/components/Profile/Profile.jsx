import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      <div className="content__img">
        <img src="https://img1.goodfon.ru/original/800x480/c/15/yosemite-national-park-ssha.jpg" />
      </div>
      <div>ava + description</div>
      <MyPosts/>
    </div>
  );
};

export default Profile;
