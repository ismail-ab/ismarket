import React from "react";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import axios from "axios";
import Layout from "../../../components/Layout";
import ProductSheet from "../../../components/ProductSheet";
import { IProduct } from "../../../types/product";

interface IProductProps {
  product: IProduct;
}

const Product: React.SFC<IProductProps> = ({ product }) => {
  const { isFallback } = useRouter();

  return (
    <Layout>
      <h2>Product details</h2>
      {isFallback ? (
        <h4>Product not found</h4>
      ) : (
        <ProductSheet product={product} />
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
