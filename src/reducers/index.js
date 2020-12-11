import { ADD_CATEGORIES, ADD_WORKSHOPS, VIEW_WORKSOP, ADD_TO_CART } from "../actions/types";

const initialState = {
  cart: [],
  newItemAdded: false,
  workshops:[],
  categories: localStorage.getItem("categories")?JSON.parse(localStorage.getItem("categories")):[],
  viewWorkshop: null
};

function rootReducer(state = initialState, action) {

  switch (action.type) {
    case ADD_WORKSHOPS:
      state.workshops.push(...action.payload);
      return state;
      case ADD_CATEGORIES:
      state.categories = action.payload;
      return state;
      case VIEW_WORKSOP:
      state.viewWorkshop = action.payload;
      return state;  
      case ADD_TO_CART:
        state.cart.push(action.payload);
        state.newItemAdded = true;
        return state;
    default:
      return state;
  }
}

export default rootReducer;
