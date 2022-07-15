import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import {
  cartReducer,
  allProductReducer,
  onePostReducer,
  userRegisterReducer,
  userSigninReducer,
  userDeletReducer,
  shoppingreducer
} from "./reducers";

const reducers = combineReducers({
  cart: cartReducer,
  allProduct: allProductReducer,
  onepost: onePostReducer,
  userRegister: userRegisterReducer,
  userSignin: userSigninReducer,
  userDelet:userDeletReducer,
  shopping:shoppingreducer
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;



const initialState = {


  userSignin: { userInfo: userInfoFromStorage }
};
const middleware = [thunk];
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
