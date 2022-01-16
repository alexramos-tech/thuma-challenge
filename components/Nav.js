import Link from "next/link";
import React from "react";
import { products } from "../api/products";

export default function Nav() {
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
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
}
