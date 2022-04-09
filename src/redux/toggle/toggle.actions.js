export const toggleIsSignIn = () => {
  return {
    type: "TOGGLE_SIGNIN_SIGNUP_PAGE",
  };
};

export const addProductItemWindow = (isOpen) => {
  return {
    type: "TOGGLE_PRODUCT_ITEM_WINDOW",
    payload: isOpen,
  };
};
