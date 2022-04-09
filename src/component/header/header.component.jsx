import "./header.style.scss";
import React from "react";
import { signOut } from "../../firebase/firebase.utils";

class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="header">
        <div className="sign-out-btn" onClick={() => signOut()}>
          Sign Out
        </div>
      </div>
    );
  }
}

export default Header;
