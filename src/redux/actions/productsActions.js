import axios from "axios";
import { ActionTypes } from "../constants/action-types";
import fakeStoreAPI from '../../apis/fakeStoreAPI';

export const fetchProducts = () => async function (dispatch) {
  const response = await fakeStoreAPI.get("/products");

  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data })
};

export const fetchProductDetail = (id) => async function (dispatch) {
  const response = await fakeStoreAPI.get(`/products/${id}`);

  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data })
};


export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
