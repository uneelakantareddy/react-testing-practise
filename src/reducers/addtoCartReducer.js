const intialState = {
  addtoItemValue: [],
  removedfromcart: [],
};

export const AddToItemCartReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TO_ITEMCART":
      return Object.assign({}, state, {
        addtoItemValue: action.payload,
      });
    case "REMOVE_FROM_CART":
      return Object.assign({}, state, {
        removedfromcart: action.payload,
      });
    default:
      return state;
  }
};
