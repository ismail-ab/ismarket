import React from "react";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import axios from "axios";
import Layout from "../../../components/Layout";
import { IProduct } from "../types";

interface IProductProps {
  product: IProduct;
}

const Product: React.FC<IProductProps> = ({ product }) => {
  const { isFallback } = useRouter();

  return (
    <Layout>
      {isFallback ? (
        <div>Product not found</div>
      ) : (
        <div>Product: {product.title}</div>
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product: IProduct = (
    await axios.get(`${process.env.API_URL}products/${params?.productid}`)
  ).data;

  return { props: { product } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products: IProduct[] = (
    await axios.get(process.env.API_URL + "products")
  ).data;

  return {
    paths: products.map(({ id }: IProduct) => ({
      params: { productid: id.toString() },
    })),
    fallback: true,
  };
};

export default Product;
