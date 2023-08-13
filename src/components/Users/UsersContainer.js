import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setCurrentPage,
  getUsers,
  unfollowThunkCreator,
  followThunkCreator,
} from "../../redux/users-reducer";
import Users from "./Users";
import Loading from "../base/Loading/Loading";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    const { currentPage, pageSize, totalUsersCount, users, isLoading } =
      this.props;
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const visiblePagesRange = 10;
    const pageRangeStart = Math.max(currentPage - 5, 1);
    const pageRangeEnd = Math.min(
      pageRangeStart + visiblePagesRange - 1,
      pagesCount
    );

    return (
      <>
        {isLoading ? <Loading /> : null}
        <Users
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChanged={this.onPageChanged}
          users={users}
          followThunkCreator={this.props.followThunkCreator}
          unfollowThunkCreator={this.props.unfollowThunkCreator}
          followingInProgress={this.props.followingInProgress}
          pageRangeEnd={pageRangeEnd}
          pageRangeStart={pageRangeStart}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
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
  getUsers,
  unfollowThunkCreator,
  followThunkCreator,
})(UsersContainer);
