import React from "react";
import Item from "../item/item.component";
import "./order-list.style.scss";

class OrderItem extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { currentItems, itemsPerPage, itemOffset } = this.props;
    return (
      <div className="orderitems-list-container">
        <table>
          <tr>
            <th>Id</th>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Options</th>
          </tr>
          {currentItems &&
            currentItems.map((item) => (
              <Item
                key={item.id}
                item={item}
                itemsPerPage={itemsPerPage}
                itemOffset={itemOffset}
              />
            ))}
        </table>
      </div>
    );
  }
}

export default OrderItem;
