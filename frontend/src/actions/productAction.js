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

const getProduct =
  (keyword = "", currentPage = 1, price = [0, 25000], category, ratings = 0) =>
  (dispatch) => {
    dispatch({ type: ALL_PRODUCT_REQUEST });
    var link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&rating[gte]=${ratings}`;

    if (category) {
      link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&rating[gte]=${ratings}`;
    }
    axios
      .get(link)
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
