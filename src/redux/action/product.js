import {
  productStart,
  productSuccess,
  productFailure,
} from "../reducers/productRedux";
import { publicRequest } from "../../requestMethods";

export const get_products = async (dispatch) => {
  dispatch(productStart());
  try {
    const res = await publicRequest.get("/products/without_filter");
    dispatch(productSuccess(res.data));
  } catch (err) {
    dispatch(productFailure());
  }
};
export const get_product = (id) => {
  return new Promise((resolve, reject) => {
    publicRequest
      .get(`/products/${id}`)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};
