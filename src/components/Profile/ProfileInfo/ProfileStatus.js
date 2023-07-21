import React from "react";
import classes from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
    // console.log("");
  };

  render() {
    return (
      <>
        <div className={classes.profileStatus_container}>
          <p className={classes.profileStatus}>Profile Status:</p>
          {!this.state.editMode ? (
            <div>
              <span onClick={this.activateEditMode} className={classes.current_status}>{this.props.status || "NO STATUS YET"}</span>
            </div>
          ) : (
            <div>
              <input
                onChange={this.onStatusChange}
                autoFocus={true}
                onBlur={this.deactivateEditMode}
                defaultValue={this.state.status}
                className={classes.input_status}
              />
            </div>
          )}
        </div>
      </>
    );
  }
}

export default ProfileStatus;
