import React from "react";
import "./signin.style.scss";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async () => {
    try {
      const { email, password } = this.state;
      alert("not yet implemented, you can still login with google");
    } catch (err) {
      alert(err.message);
    }
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="signin-container">
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.onChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.onChange}
          />
        </div>
        <div className="submit-signin" onClick={this.handleSubmit}>
          Sign In
        </div>
      </div>
    );
  }
}

export default SignIn;
