// import React from "react";
import {
  addPostActionCreator,
  updatePostActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
// import StoreContext from "../../../StoreContext";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let addPost = () => {
//           // props.addPost();
//           store.dispatch(addPostActionCreator());
//         };

//         let onPostChange = (text) => {
//           // let text = newPostElement.current.value;
//           store.dispatch(updatePostActionCreator(text));
//         };
//         return (
//           <MyPosts
//             updatePost={onPostChange}
//             addPost={addPost}
//             postData={state.profilePage.postData}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updatePost: (text) => {
      dispatch(updatePostActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
