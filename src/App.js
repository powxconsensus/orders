import HomePage from "./pages/homepage/homepage";
import Header from "./component/header/header.component";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Authentication from "./pages/authentication/authentication.component";
import React from "react";
import { setUser } from "./redux/userReducer/user.actions";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";

class App extends React.Component {
  constructor() {
    super();
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    if (!this.props.user) return <Authentication />;
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    );
  }
}

const mapPropsToState = (state) => {
  return {
    user: state.user.user,
  };
};
const mapDispatchToState = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setUser(user)),
  };
};
export default connect(mapPropsToState, mapDispatchToState)(App);
