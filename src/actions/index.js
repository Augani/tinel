import { ADD_WORKSHOPS,ADD_CATEGORIES, VIEW_WORKSOP, ADD_TO_CART } from "./types";

export function addWorkshops(payload) {
  // localStorage.setItem("workshops", JSON.stringify(payload))
  return { type: ADD_WORKSHOPS, payload };
}

export function addCategories(payload) {
    localStorage.setItem("categories", JSON.stringify(payload))
    return { type: ADD_CATEGORIES, payload };
  }

export function viewWorkshop(payload){
    return {type: VIEW_WORKSOP, payload}
}  

export function addToCart(payload){
  return {type: ADD_TO_CART, payload}
}