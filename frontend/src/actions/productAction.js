import axios from "axios";

import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants.js";

const getProduct = () => (dispatch) => {
  dispatch({ type: ALL_PRODUCT_REQUEST });

  axios
    .get("/api/v1/products")
    .then((response) => {
      const products = response.data;
      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: products,
      });
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: errorMsg,
      });
    });
};

// Get Products Details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export { getProduct, clearErrors };
