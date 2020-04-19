import React from "react";
import ProductDetails from "./Product";
import { IProduct } from "../../types/product";
import styles from "./productsList.module.css";

interface IProductsListProps {
  products: IProduct[];
}

const ProductsList: React.SFC<IProductsListProps> = ({ products }) => {
  return (
    <section className={styles.products}>
      {products &&
        products.map((product) => <ProductDetails product={product} />)}
    </section>
  );
};

export default ProductsList;
