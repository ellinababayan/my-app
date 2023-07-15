import React from "react";
import Profile from "./Profile";
import { getProfileThunkCreator } from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { Navigate } from "react-router-dom";
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
    // debugger
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfileThunkCreator(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        profileId={this.props.userId}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getProfileThunkCreator }), // <| closing ) should be here
  withRouter,
  AuthNavigate // <| not here
)(ProfileContainer);
