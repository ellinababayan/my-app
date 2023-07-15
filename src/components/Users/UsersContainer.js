import React from "react";
import { connect } from "react-redux";
import {
  // follow,
  // unfollow,
  setCurrentPage,
  toogleIsFollowing,
  getUsers,
  unfollowThunkCreator,
  followThunkCreator,
} from "../../redux/users-reducer";
import Users from "./Users";
import Loading from "../base/Loading/Loading";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isLoading ? <Loading /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          followThunkCreator={this.props.followThunkCreator}
          unfollowThunkCreator={this.props.unfollowThunkCreator}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  setCurrentPage,
  toogleIsFollowing,
  getUsers,
  unfollowThunkCreator,
  followThunkCreator,
})(UsersContainer);
