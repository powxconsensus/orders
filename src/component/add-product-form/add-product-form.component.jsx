import React from "react";
import { connect } from "react-redux";
import "./add-product-form.style.scss";
import { customAlphabet } from "nanoid/non-secure";
import { addOrder } from "../../redux/orders/orders.actions";
import { addProductItemWindow } from "./../../redux/toggle/toggle.actions";

class AddProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      customer_name: "",
      customer_email: "",
      product: "",
      quantity: "",
    };
  }
  handleSubmit = () => {
    const { customer_email, customer_name, product, quantity } = this.state;
    if (!customer_email || !customer_name || !product || !quantity)
      return alert("enter all details before addition");
    const nanoid = customAlphabet("abdef0123456789", 24);
    this.props.addOrder({
      customer_email,
      customer_name,
      product,
      quantity,
      id: nanoid(),
    });
    this.props.addProductItemWindow(false);
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { customer_email, customer_name, product, quantity } = this.state;
    return (
      <div
        className="add-product-container"
        onClick={(event) => {
          if (event.target.className === "add-product-container")
            this.props.addProductItemWindow(false);
        }}
      >
        <div className="add-product-form">
          <div className="heading">Add Product</div>
          <div className="input-field">
            <input
              type="text"
              name="customer_name"
              value={customer_name}
              onChange={this.handleChange}
            />
            <label>Customer Name</label>
          </div>
          <div className="input-field">
            <input
              type="email"
              name="customer_email"
              value={customer_email}
              onChange={this.handleChange}
            />
            <label>Customer Email</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="product"
              value={product}
              onChange={this.handleChange}
            />
            <label>Product</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="quantity"
              value={quantity}
              onChange={this.handleChange}
            />
            <label>Quantity</label>
          </div>
          <div className="add-btn" onClick={this.handleSubmit}>
            <p> Add</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addProductItemWindow: (isOpen) => dispatch(addProductItemWindow(isOpen)),
    addOrder: (payload) => dispatch(addOrder(payload)),
  };
};
export default connect(null, mapDispatchToProps)(AddProduct);
