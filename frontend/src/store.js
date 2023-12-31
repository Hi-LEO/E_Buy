import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  ProductdetailsReducer,
  gitProduct,
  newProductReducer,
  newReviewReducer,
  productReducer,
  AdminProduct,
} from "./reducers/productReducer";
import {
  resetPasswordReducer,
  updateReducer,
  userPassword,
  allUsersReducer,
  // userLoader,
  // userLogout,
  userReducer,
  userDetailsReducer,
  // userRegister,
} from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";

import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/orderReducer";

const reducer = {
  products: gitProduct,
  productDetail: ProductdetailsReducer.reducer,
  user: userReducer.reducer,
  profile: updateReducer,
  password: userPassword.reducer,
  forgotpassword: resetPasswordReducer.reducer,
  cart: cartReducer,
  neworder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  newReview: newReviewReducer,
  allUsers: allUsersReducer,
  newProduct: newProductReducer,
  product: productReducer,
  order: orderReducer,
  Adminitem: AdminProduct,
  userDetails: userDetailsReducer,
};

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};
const store = configureStore({
  reducer,
  preloadedState: initialState,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
