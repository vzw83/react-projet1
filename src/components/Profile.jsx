import React from "react";
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      <div className="content__img">
        <img src="https://img1.goodfon.ru/original/800x480/c/15/yosemite-national-park-ssha.jpg" />
      </div>
      <div>ava + description</div>
      <div>
        my posts
        <div>new posts</div>
      </div>
      <div className={s.posts}>
        <div className={s.item}>post 1</div>
        <div className="item">post 2</div>
      </div>
    </div>
  );
};

export default Profile;
