import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import axios from "axios";
import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";
import { IProduct } from "./types";

interface IProductsProps {
  products: IProduct[];
  totalProducts: number;
}

const Products: React.FC<IProductsProps> = ({ products, totalProducts }) => {
  return (
    <Layout>
      <ul>
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <Link href="/products/[productid]" as={`/products/${product.id}`}>
                <a>{product.title}</a>
              </Link>
            </li>
          ))}
      </ul>
      <Pagination uri="/products" totalElements={totalProducts} />
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
