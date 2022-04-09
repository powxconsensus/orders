import React, { useEffect, useState } from "react";
import "./orderlist.style.scss";
import ReactPaginate from "react-paginate";
import OrderItem from "../orderitem/order-item.component";
import orders from "./../../data.json";
import {
  setOrderList,
  setCurrentItemList,
} from "../../redux/orders/orders.actions";
import { connect } from "react-redux";

// Example items, to simulate fetching from another resources.
var stringifyObj = JSON.stringify(orders);
const items = JSON.parse(stringifyObj);

function PaginatedItems({
  itemsPerPage,
  setOrderList,
  setCurrentItemList,
  currentOrderList,
}) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    setOrderList(items);
  }, []);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
    setCurrentItemList(items.slice(itemOffset, endOffset));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="react-paginate-index">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
      <OrderItem
        currentItems={currentOrderList}
        itemsPerPage={itemsPerPage}
        itemOffset={itemOffset}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    currentOrderList: state.order.currentOrderList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setOrderList: (payload) => dispatch(setOrderList(payload)),
    setCurrentItemList: (payload) => dispatch(setCurrentItemList(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PaginatedItems);
