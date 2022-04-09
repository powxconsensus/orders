import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { connect } from "react-redux";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";

import {
  deleteOrderById,
  editOrderById,
} from "./../../redux/orders/orders.actions";
import "./item.style.scss";

class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      toSave: false,
      customer_email: "",
      customer_name: "",
      product: "",
      quantity: "",
    };
  }
  findIndex = () => {
    const { item, itemsPerPage, itemOffset, ordersList } = this.props;
    for (let i = itemOffset; i < itemOffset + itemsPerPage; i++) {
      if (ordersList[i].id === item.id) {
        return i;
      }
    }
    return -1;
  };
  handleDelete = () => {
    const { item, deleteOrderById, itemOffset } = this.props;
    const idx = this.findIndex();
    if (idx == -1) return alert("order not found");
    deleteOrderById({
      id: item.id,
      idx,
      cidx: idx - itemOffset,
    });
  };
  handleEdit = () => {
    const { item } = this.props;
    this.setState({
      toSave: true,
      customer_email: item.customer_email,
      customer_name: item.customer_name,
      product: item.product,
      quantity: item.quantity,
    });
    alert("now you can edit the data in table itself, click tick mark then");
  };

  handleSubmitEdit = (event) => {
    const { customer_email, customer_name, product, quantity } = this.state;
    const { item, editOrderById, itemOffset } = this.props;
    if (!quantity || !customer_email || !customer_name || !product)
      return alert("provide all details");
    const idx = this.findIndex();
    if (idx == -1) return alert("order not found");
    const updatedObject = {
      id: item.id,
      customer_email,
      customer_name,
      product,
      quantity,
    };
    editOrderById({
      id: item.id,
      idx,
      cidx: idx - itemOffset,
      updatedObject,
    });
    this.setState({ toSave: false });
  };

  render() {
    const { item } = this.props;
    const { toSave } = this.state;
    if (Object.keys(item).length == 0)
      return <div className="deleted-product">Product Deleted</div>;
    return (
      <tr className="row">
        <td>{item.id}</td>
        <td
          contentEditable={toSave ? "true" : "false"}
          onInput={(event) =>
            this.setState({ customer_name: event.target.innerHTML })
          }
        >
          {item.customer_name}
        </td>
        <td
          contentEditable={toSave ? "true" : "false"}
          onInput={(event) =>
            this.setState({ customer_email: event.target.innerHTML })
          }
        >
          {item.customer_email}
        </td>
        <td
          contentEditable={toSave ? "true" : "false"}
          onInput={(event) =>
            this.setState({ product: event.target.innerHTML })
          }
        >
          {item.product}
        </td>
        <td
          contentEditable={toSave ? "true" : "false"}
          onInput={(event) =>
            this.setState({ quantity: event.target.innerHTML })
          }
        >
          {item.quantity}
        </td>
        <td className="options-btn">
          {!this.state.toSave ? (
            <>
              <BiEditAlt className="opbtn" onClick={this.handleEdit} />
              <MdDeleteForever className="opbtn" onClick={this.handleDelete} />
            </>
          ) : (
            <>
              <TiTick
                className="opbtn"
                style={{ fontSize: "20px" }}
                onClick={this.handleSubmitEdit}
              />
              <ImCross
                className="opbtn"
                style={{ fontSize: "12px" }}
                onClick={() => this.setState({ toSave: false })}
              />
            </>
          )}
        </td>
      </tr>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ordersList: state.order.ordersList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteOrderById: (payload) => dispatch(deleteOrderById(payload)),
    editOrderById: (payload) => dispatch(editOrderById(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Item);
