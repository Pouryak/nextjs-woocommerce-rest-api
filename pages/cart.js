import React, { useState, useEffect } from "react";
import CartItemsContainer from "../src/components/cart/CartItemsContainer";

import { HEADER_FOOTER_ENDPOINT } from "../src/utils/constants/endpoints";
import Header from "../src/components/global/Header";
import Footer from "../src/components/global/Footer";
import axios from "axios";

const Cart = ({ headerFooter }) => {
  const { header, footer } = headerFooter;

  return (
    <>
      <Header data={header} />
      <CartItemsContainer />
      <Footer data={footer} />
    </>
  );
};

export default Cart;

export async function getStaticProps() {
  const { data: headerFooter } = await axios.get(HEADER_FOOTER_ENDPOINT);

  return {
    props: {
      headerFooter: headerFooter?.data ?? {},
    },
    revalidate: 1,
  };
}
