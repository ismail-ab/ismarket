import React from "react";
import Link from "next/link";
import { IProduct } from "../../types/product";
import styles from "./productsList.module.css";

interface IProductDetailsProps {
  product: IProduct;
}

const ProductDetails: React.SFC<IProductDetailsProps> = ({ product }) => (
  <Link
    key={product.id}
    href="/products/[productid]"
    as={`/products/${product.id}`}
  >
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.productInfos}>
        <h6>{product.title}</h6>
        <h4>{product.price}€</h4>
      </div>
    </div>
  </Link>
);

export default ProductDetails;
