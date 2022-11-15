import { getSession, storeSession } from "./session";
import { getApiCartConfig } from "./api";
import axios from "axios";
import { CART_ENDPOINT } from "../constants/endpoints";
import { isEmpty, isArray } from "lodash";

export const addToCart = (productId, qty = 1) => {
  const storedSession = getSession();
  const addOrViewCartConfig = getApiCartConfig();

  axios
    .post(
      CART_ENDPOINT,
      { product_id: productId, quantity: qty },
      addOrViewCartConfig
    )
    .then((res) => {
      if (isEmpty(storedSession)) {
        storeSession(res?.headers?.["x-wc-session"]);
      }
      viewCart();
    })
    .catch((err) => {
      console.log("error", err);
    });
};

export const viewCart = () => {
  const addOrViewCartConfig = getApiCartConfig();

  axios
    .get(CART_ENDPOINT, addOrViewCartConfig)
    .then((res) => {
      console.log("response", res);
    })
    .catch((err) => {
      console.log("error", err);
    });
};
