import React from "react";
import { IProduct } from "../../types/product";
import styles from "./productsheet.module.css";

interface ProductSheetProps {
  product: IProduct;
}

const ProductSheet: React.SFC<ProductSheetProps> = ({ product }) => {
  return (
    <section className={styles.productCard}>
      <img src={product.image} alt={product.title} />
      <div className={styles.productDetails}>
        <div className={styles.productInfos}>
          <h3>{product.title}</h3>
          <h2>{product.price}€</h2>
          <del>{product.compare_at_price}€</del>
          <p>Vendor: {product.vendor}</p>
          <p>Remaining: {product.inventory_quantity}</p>
          <p>Weight: {product.weight}</p>
          <p>SKU: {product.sku}</p>
          <p>{product.body_html_safe}</p> {/* description field? */}
        </div>
        <button className={styles.buyButton}>
          {product.inventory_management !== "0"
            ? "Add to basket"
            : "Notify me once available"}
        </button>
      </div>
    </section>
  );
};

export default ProductSheet;
