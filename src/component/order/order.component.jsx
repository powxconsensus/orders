import React from "react";
import PaginatedItems from "../orderlist/orderlist.component";
import "./order.style.scss";

class Order extends React.Component {
  constructor() {
    super();
    this.state = {
      itemsPerPage: 8,
    };
  }
  render() {
    return (
      <div className="paginate-items-container">
        <PaginatedItems itemsPerPage={this.state.itemsPerPage} />
      </div>
    );
  }
}

export default Order;
