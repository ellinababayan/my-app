import React from "react";
import classes from "./MyPosts.module.css";
import styles from "../../base/Buttons.module.css";
import stylerule from "../../base/Errors.module.css";
import Post from "./Post/Post";
import { Formik, Form, Field, ErrorMessage } from "formik";

const MyPosts = (props) => {
  let postsElement = props.postData.map((data) => {
    return <Post message={data.message} key={data.id} />;
  });

  return (
    <div className={classes.my_post}>
      <h3>My posts</h3>
      <div>
        <Formik
          initialValues={{ newPost: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.newPost) {
              errors.newPost = "Сreate your new post to add it";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            let text = values.newPost;
            props.updatePost(text);
            props.addPost(text);
            resetForm();
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <div className={classes.loginField}>
              <Form>
                <label htmlFor="newPost" className={classes.label}></label>
                <Field
                  type="newPost"
                  name="newPost"
                  className={classes.textarea}
                  placeholder="Write your post here"
                />
                <div className={stylerule.error}>
                  <ErrorMessage name="newPost" component="div" className={stylerule.error_message} />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.button_mypost}
                  >
                    Add Post
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
      <div>New post</div>
      <div className={classes.posts} key={1}>
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
