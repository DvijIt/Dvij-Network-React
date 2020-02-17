import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img className={classes.mainImage}
          src="https://pw.inteligenciahefesto.com.ec/utilidades/slide/jssor_carousel_slider_for_bootstrap_example/img/gallery/980x380/001.jpg"
          alt="mainImage"
        />
      </div>
      <div>area + descr</div>
      <div>
        My posts
        <div>New Post</div>
      </div>
      <div className={classes.posts}>
        <div className={classes.item}>post 1</div>
        <div className={classes.item}>post 2</div>
      </div>
    </div>
  );
};

export default Profile;
