const INITIAL_STATE = {
  ordersList: [],
  currentOrderList: [],
};

const OrderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_ORDER_LIST":
      return {
        ...state,
        ordersList: action.payload,
      };
    case "DELETE_ORDER_BY_ID": {
      const tempCO = state.currentOrderList;
      tempCO[action.payload.cidx] = {};
      const tempOL = state.ordersList;
      tempOL[action.payload.idx] = {};
      return {
        ...state,
        currentOrderList: [...tempCO],
        ordersList: [...tempOL],
      };
    }
    case "EDIT_ORDER_BY_ID": {
      const tempCO = state.currentOrderList;
      tempCO[action.payload.cidx] = { ...action.payload.updatedObject };
      const tempOL = state.ordersList;
      tempOL[action.payload.idx] = { ...action.payload.updatedObject };
      return {
        ...state,
        currentOrderList: [...tempCO],
        ordersList: [...tempOL],
      };
    }
    case "ADD_ORDER":
      return {
        ...state,
        currentOrderList: [action.payload, ...state.currentOrderList],
        ordersList: [action.payload, ...state.ordersList],
      };
    case "SET_CURRENT_ITEM_LIST":
      return { ...state, currentOrderList: action.payload };
    default:
      return state;
  }
};

export default OrderReducer;
