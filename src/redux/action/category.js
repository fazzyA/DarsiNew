import {
  categoryStart,
  categorySuccess,
  categoryFailure,
} from "../reducers/categoryRedux";
import { publicRequest } from "../../requestMethods";

export const get_categories = async (dispatch) => {
  dispatch(categoryStart());
  try {
    debugger;
    const res = await publicRequest.get("/categories/without_filter");
    dispatch(categorySuccess(res.data));
  } catch (err) {
    dispatch(categoryFailure());
  }
};
