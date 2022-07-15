import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAILED,
  CART_TO_ADDSUCCESS,
  CART_TO_REMOVE,
 
  ONE_PRODUCTS_REQUEST,
  ONE_PRODUCTS_SUCCESS,
  ONE_PRODUCTS_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILED,
  USER_DELET_REQUEST,USER_DELET_SUCCESS,USER_DELET_FAILED,
  ORDER_ITEM_REQUEST,
} from "./constants";
import axios from "axios";

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REQUEST });
    const { data } = await axios.get("http://5.161.141.215:5000/api/products");
    dispatch({ type: ALL_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ALL_PRODUCTS_FAILED, payload: error });
  }
};
// cartid
export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let flog = false;
  cartItems.forEach((x) => {
    if (x._id === product._id) {
      flog = true;
      x.count++;
    }
  });
  if (!flog) {
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({ type: CART_TO_ADDSUCCESS, payload: { cartItems } });

  localStorage.setItem("carts", JSON.stringify(cartItems));

};

// remove cart
export const RemovFromCart = (product) => async (dispatch, getState) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x) => x._id !== product._id);
  dispatch({
    type: CART_TO_REMOVE,payload:{ cartItems }});
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
// cartshoppinge
export const saveShoppingAddress = (data) => (dispatch) => {
  dispatch({ type: ORDER_ITEM_REQUEST, payload: data });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

// oneproduct

export const getOnePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: ONE_PRODUCTS_REQUEST });
    const { data } = await axios.get(
      `http://5.161.141.215:5000/api/products/${id}`
    );
    dispatch({ type: ONE_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ONE_PRODUCTS_FAILED, payload: error });
  }
};

// userregister
export const getRegisterAction = (email, pass, name) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const { data } = await axios.post(
      "http://5.161.141.215:5000/api/users",
      {
        email,
        name,
        password: pass
      },
      config
    );

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILED,
      payload:
        error.respomse && error.respomse.data.message
          ? error.respomse.data.message
          : error.message
    });
  }
};

// singin
export const getSigninAction = (email, pass) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const { data } = await axios.post(
      "http://5.161.141.215:5000/api/users/login",
      {
        email,
        password: pass
      },
      config
    );
    localStorage.setItem("token", data.token);
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAILED,
      payload:
        error.respomse && error.respomse.data.message
          ? error.respomse.data.message
          : error.message
    });
  }
};

// user del

export const userDeletAction = () => async (dispatch,getState) => {
  try {
    dispatch({ type: USER_DELET_REQUEST });
    const {
      userLogin:{userInfo}

    }=getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        headers:{
          Authorization:`Bearer ${userInfo.token}`
        }
      }
    };
    const { data } = await axios.post(
      "http://5.161.141.215:5000/api/users/login", config
    );
    
    dispatch({ type: USER_DELET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_DELET_FAILED,
      payload:
        error.respomse && error.respomse.data.message
          ? error.respomse.data.message
          : error.message
    });
  }
};
 

