import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
// import {
//   addPostActionCreator,
//   updatePostActionCreator,
// } from "../../../redux/profile-reducer";

const MyPosts = (props) => {
  // debugger
  let postsElement = props.postData.map((data) => {
    return <Post message={data.message} key={data.id} />;
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatePost(text);
    // props.dispatch(updatePostActionCreator(text));
  };

  return (
    <div className={classes.my_post}>
      <h3>My posts</h3>
      <div>
        <textarea
          ref={newPostElement}
          className={classes.textarea}
          placeholder="Write your post here"
          value={props.newPostText}
          onChange={onPostChange}
        />
        <button className={classes.button} onClick={addPost}>
          Add Post
        </button>
      </div>
      <div>New post</div>
      <div className={classes.posts}>
        <img
          alt="My posts"
          src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
        />
        {postsElement}
      </div>
    </div>
  );
};

export default MyPosts;
