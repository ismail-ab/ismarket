import React from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";
import ProductsList from "../../components/ProductsList";
import { IProduct } from "../../types/product";

interface IProductsProps {
  products: IProduct[];
  totalProducts: number;
}

const Products: React.SFC<IProductsProps> = ({ products, totalProducts }) => {
  return (
    <Layout>
      <h2>Products</h2>
      <ProductsList products={products} />
      <Pagination urlResource="/products" totalElements={totalProducts} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = query?.page || 1;
  const limit = query?.limit || 20;
  const response = await axios.get(
    `${process.env.API_URL}products?_page=${page}&_limit=${limit}`
  ); // Need to verify if page exists
  const products: IProduct[] = response.data;
  const totalProducts = response.headers["x-total-count"];

  return { props: { products, totalProducts } };
};

export default Products;
