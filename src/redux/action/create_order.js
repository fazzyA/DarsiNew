import { publicRequest } from "../../requestMethods";

export const createOrder = (data) => {
  return new Promise((resolve, reject) => {
    publicRequest
      .post(`/orders`, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};
