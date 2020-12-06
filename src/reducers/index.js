import { ADD_CATEGORIES, ADD_WORKSHOPS, VIEW_WORKSOP } from "../actions/types";

const initialState = {
  cart: [],
  newItemAdded: false,
  workshops: localStorage.getItem("workshops")?JSON.parse(localStorage.getItem("workshops")):[],
  categories: localStorage.getItem("categories")?JSON.parse(localStorage.getItem("categories")):[],
  viewWorkshop: null
};

function rootReducer(state = initialState, action) {

  switch (action.type) {
    case ADD_WORKSHOPS:
      state.workshops = action.payload;
      return state;
      case ADD_CATEGORIES:
      state.categories = action.payload;
      return state;
      case VIEW_WORKSOP:
      state.viewWorkshop = action.payload;
      return state;  
    default:
      return state;
  }
}

export default rootReducer;
