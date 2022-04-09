import React from "react";
import { connect } from "react-redux";
import "./home-page.style.scss";
import { HiPlusCircle } from "react-icons/hi";
import { addProductItemWindow } from "../../redux/toggle/toggle.actions";
import Order from "../../component/order/order.component";
// the home background and the color gradiant for the recommended restaurants
import AddProduct from "../../component/add-product-form/add-product-form.component";

class HomePage extends React.Component {
  constructor() {
    super();
  }
  async componentDidMount() {
    try {
    } catch (err) {
      alert(err.message);
    }
  }

  render() {
    const { displayName, photoURL, email, phoneNumber } = this.props.user;
    return (
      <div className="home-page">
        <div className="left-profile-container">
          <div className="profile-container">
            <div
              className="profile-image"
              style={{
                backgroundImage: `url(https://bit.ly/3NWdOZK)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="user-photo">
                <img src={photoURL} alt="user profile goes here!" />
              </div>
            </div>
            <div className="user-details">
              <div className="user-name">{displayName}</div>
              <div className="user-email">{email}</div>
              <div className="user-phone">{phoneNumber}</div>
            </div>
          </div>
        </div>
        <div className="right-order-container">
          <Order />
        </div>
        <HiPlusCircle
          className="add-order-btn"
          onClick={() => this.props.addProductItemWindow(true)}
        />
        {this.props.isProductFormOpen ? <AddProduct /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isProductFormOpen: state.toggle.isProductFormOpen,
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductItemWindow: (isOpen) => dispatch(addProductItemWindow(isOpen)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
