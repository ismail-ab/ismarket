import React from "react";
import Link from "next/link";
import { IProduct } from "../../types/product";
import styles from "./products.module.css";

interface IProductsProps {
  products: IProduct[];
}

const Products: React.SFC<IProductsProps> = ({ products }) => {
  return (
    <section className={styles.products}>
      {products &&
        products.map((product) => (
          <Link
            key={product.id}
            href="/products/[productid]"
            as={`/products/${product.id}`}
          >
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
        ))}
    </section>
  );
};

export default Products;
