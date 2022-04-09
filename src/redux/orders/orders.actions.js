export const setOrderList = (payload) => {
  return {
    type: "SET_ORDER_LIST",
    payload,
  };
};
export const setCurrentItemList = (payload) => {
  return {
    type: "SET_CURRENT_ITEM_LIST",
    payload,
  };
};

export const addOrder = (payload) => {
  return {
    type: "ADD_ORDER",
    payload,
  };
};

export const deleteOrderById = (payload) => {
  return {
    type: "DELETE_ORDER_BY_ID",
    payload,
  };
};

export const editOrderById = (payload) => {
  return {
    type: "EDIT_ORDER_BY_ID",
    payload,
  };
};
