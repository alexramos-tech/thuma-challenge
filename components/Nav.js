import Link from "next/link";
import React from "react";
import ProductsApi from "../api/products";

const { products } = ProductsApi;

const Nav = () => {
  return (
    <>
      <nav>
        <Link href="/">Cart</Link>
        {products.map((product) => (
          <Link key={product} href={`/products/${product}`} passHref>
            <a href style={{ textTransform: "capitalize" }}>
              {product}
            </a>
          </Link>
        ))}
      </nav>
      <hr />
    </>
  );
};

export default Nav;
