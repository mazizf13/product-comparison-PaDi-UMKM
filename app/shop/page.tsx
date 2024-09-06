"use client";

import Layout from "@/components/Layout";
import CardProduct from "@/components/product/CardProduct";
import ComparisonPopup from "@/components/product/ComparisonDialog";
import { products } from "@/data/product";
import useComparison from "@/hooks/useComparison";
import React, { useState } from "react";

const Shop = () => {
  const {
    comparedProducts,
    addProductToCompare,
    removeProductFromCompare,
    clearComparison,
  } = useComparison();
  const [showComparison, setShowComparison] = useState(false);

  const handleCompareSelect = (selected: boolean, product: any) => {
    if (selected) {
      addProductToCompare(product);
    } else {
      removeProductFromCompare(product.id);
    }
  };

  const handleCompareClick = () => {
    if (comparedProducts.length >= 2) {
      setShowComparison(true);
    } else {
      alert("Please select at least 2 products to compare.");
    }
  };

  const handleClosePopup = () => {
    setShowComparison(false);
    clearComparison();
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="mb-6 text-3xl font-bold">Shop</h1>
        <button
          className="mb-6 rounded bg-blue-500 px-4 py-2 text-white"
          onClick={handleCompareClick}
        >
          Bandingkan Produk
        </button>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <CardProduct
              key={product.id}
              product={product}
              onCompareSelect={handleCompareSelect}
            />
          ))}
        </div>
        {showComparison && (
          <ComparisonPopup
            products={comparedProducts}
            onClose={handleClosePopup}
          />
        )}
      </div>
    </Layout>
  );
};

export default Shop;
