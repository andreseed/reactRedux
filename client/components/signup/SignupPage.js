import React from "react";
import SignupForm from "./SignupForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userSignupRequest } from "../../actions/signupActions";

class SignupPage extends React.Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest} />
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired //React.propTypes.func.isRequired
};

export default connect(null, { userSignupRequest })(SignupPage);
