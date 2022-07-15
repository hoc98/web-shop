import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAILED,
  CART_TO_ADDREQUEST,
  CART_TO_ADDSUCCESS,
  CART_TO_ADDFAILED,
  CART_TO_REMOVE,
  CART_TO_SHOPPING,
  ONE_PRODUCTS_FAILED,
  ONE_PRODUCTS_SUCCESS,
  ONE_PRODUCTS_REQUEST,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILED,
  USER_SIGNIN,
  USER_DELET_REQUEST,
  USER_DELET_SUCCESS,
  USER_DELET_FAILED,
  USER_DELET_RESET,
  ORDER_ITEM_REQUEST
} from "./constants";

export const allProductReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCTS_REQUEST:
      return { loading: true, ...state };

    case ALL_PRODUCTS_SUCCESS:
      return { loading: false, posts: action.payload };

    case ALL_PRODUCTS_FAILED:
      return { ...state, loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
// cart
export const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems")  || "[]")},
  action
) => {
  switch (action.type) {
    case CART_TO_ADDSUCCESS:
      return{cartItems:action.payload.cartItems}
      case CART_TO_REMOVE:
        return{cartItems:action.payload.cartItems}
      default:
        return state;
  }
};

export const onePostReducer = (state = { onedata: [] }, action) => {
  switch (action.type) {
    case ONE_PRODUCTS_REQUEST:
      return { loading: true, ...state };
    case ONE_PRODUCTS_SUCCESS:
      return { loading: false, onedata: action.payload };
    case ONE_PRODUCTS_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAILED:
      return { loading: false, error: action.payload };
    case USER_SIGNIN:
      return {};
    default:
      return state;
  }
};

export const userDeletReducer = (state = {loading:false,user:null,error:null}, action) => {
  switch (action.type) {
    case  USER_DELET_REQUEST:
      return { loading: true };
    case USER_DELET_SUCCESS:
      return { loading: false, user: action.payload };
    case  USER_DELET_FAILED:
      return { loading: false, error: action.payload };
      case  USER_DELET_RESET:
        return { user:null};

    default:
      return state;
  }
};
export const  shoppingreducer =(state={shoppingInfo:[]},action)=>{
  switch (action.type) {
    case ORDER_ITEM_REQUEST:
      return{...state,shoppingInfo:action.payload}
      
      
  
    default:
      return state;
      
  }
}