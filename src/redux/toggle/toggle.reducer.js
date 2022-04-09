const INITIAL_STATE = {
  isSignIn: true,
  isProductFormOpen: false,
};

const toggleReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case "TOGGLE_SIGNIN_SIGNUP_PAGE":
      return {
        ...state,
        isSignIn: !state.isSignIn,
      };
    case "TOGGLE_PRODUCT_ITEM_WINDOW":
      return {
        ...state,
        isProductFormOpen: actions.payload,
      };
    default:
      return state;
  }
};

export default toggleReducer;
