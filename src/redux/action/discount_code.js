import { publicRequest } from "../../requestMethods";

export const apply_discount_code = (code) => {
  return new Promise((resolve, reject) => {
    publicRequest
      .get(`/users/code/${code}`)
      .then((user) => {
        publicRequest
          .get(`/packages/${user.data.referral_package}`)
          .then((p) => {
            resolve(p.data);
          })
          .catch((err) => reject(err));
      })
      .catch((err) => reject(err));
  });
};
