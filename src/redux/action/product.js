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
    console.log(res);
    dispatch(productSuccess(res.data));
  } catch (err) {
    dispatch(productFailure());
  }
};
