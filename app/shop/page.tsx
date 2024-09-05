import Layout from "@/components/Layout";
import CardProduct from "@/components/product/CardProduct";
import { products } from "@/data/product";
import React from "react";

const Shop = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="mb-6 text-3xl font-bold">Shop</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
