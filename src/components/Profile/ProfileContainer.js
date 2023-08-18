import React from "react";
import Profile from "./Profile";
import {
  getProfileThunkCreator,
  updateStatusThunkCreator,
  getStatusThunkCreator,
} from "../../redux/profile-reducer";
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
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        profileId={this.props.userId}
        status={this.props.status}
        updateStatus={this.props.updateStatusThunkCreator}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, {
    getProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator,
  }),
  withRouter,
  AuthNavigate
)(ProfileContainer);
