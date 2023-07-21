import React from "react";
import Profile from "./Profile";
import {
  getProfileThunkCreator,
  updateStatusThunkCreator,
  getStatusThunkCreator,
} from "../../redux/profile-reducer";
// import {
//   toogleIsFollowing,
//   unfollowThunkCreator,
//   followThunkCreator,
//   getUsers,
// } from "../../redux/users-reducer";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AuthNavigate from "../../hoc/AuthRedirect";
import { compose } from "redux";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      // userId = 28979;
      userId = 2;
    }
    this.props.getProfileThunkCreator(userId);
    this.props.getStatusThunkCreator(userId);
    // this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  render() {
    // debugger
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        profileId={this.props.userId}
        status={this.props.status}
        updateStatus={this.props.updateStatusThunkCreator}
        //new
        // followThunkCreator={this.props.followThunkCreator}
        // unfollowThunkCreator={this.props.unfollowThunkCreator}
        // followingInProgress={this.props.followingInProgress}
        // users={this.props.users}
        // // totalUsersCount={this.props.totalUsersCount}
        // totalUsersCount={1}
        //new
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  status: state.profilePage.status,
  // followingInProgress: state.usersPage.followingInProgress,
  // users: state.usersPage.users,
  // totalUsersCount: state.usersPage.totalUsersCount,
});

export default compose(
  connect(mapStateToProps, {
    getProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator,
    // new
    
    // unfollowThunkCreator,
    // followThunkCreator,
    // toogleIsFollowing,
    // getUsers,
  }), // <| closing ) should be here
  withRouter,
  AuthNavigate // <| not here
)(ProfileContainer);
