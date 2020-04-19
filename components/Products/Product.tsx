import React from "react";
import Link from "next/link";
import { IProduct } from "../../types/product";
import styles from "./products.module.css";

interface IProductProps {
  product: IProduct;
}

const Product: React.SFC<IProductProps> = ({ product }) => (
  <Link key={product.id} href="/products/[productid]">
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={product.image} />
      </div>
      <div className={styles.productInfo}>
        <h6>{product.title}</h6>
        <h4>{product.price}€</h4>
      </div>
    </div>
  </Link>
);

export default Product;
