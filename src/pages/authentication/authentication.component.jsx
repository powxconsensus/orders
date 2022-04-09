import React from "react";
import { connect } from "react-redux";
import SignIn from "../../component/signin/signin.component";
import "./authentication.style.scss";
import { toggleIsSignIn } from "../../redux/toggle/toggle.actions";
import { signInWithGoogle } from "../../firebase/firebase.utils";
class Authentication extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { isSignIn } = this.props;
    return (
      <div className="authentication-page">
        <div className="authentication-form">
          <div className="authentication-header">Sign In</div>
          <SignIn />
          <div className="authentication-footer">
            <div className="sign-in-with-google" onClick={signInWithGoogle}>
              Sign In With Google
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isSignIn: state.toggle.isSignIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleIsSignIn: () => dispatch(toggleIsSignIn()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
