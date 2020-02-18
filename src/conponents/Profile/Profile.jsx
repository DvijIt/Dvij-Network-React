import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/Posts";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img
          className={classes.mainImage}
          src="https://pw.inteligenciahefesto.com.ec/utilidades/slide/jssor_carousel_slider_for_bootstrap_example/img/gallery/980x380/001.jpg"
          alt="mainImage"
        />
      </div>
      <div>area + descr</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
