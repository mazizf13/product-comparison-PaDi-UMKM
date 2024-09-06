import { Product } from "@/data/product";
import { useState } from "react";

const useComparison = () => {
  const [comparedProducts, setComparedProducts] = useState<Product[]>([]);

  const addProductToCompare = (product: Product) => {
    if (comparedProducts.length < 5) {
      setComparedProducts([...comparedProducts, product]);
    }
  };

  const removeProductFromCompare = (productId: number) => {
    setComparedProducts(comparedProducts.filter((p) => p.id !== productId));
  };

  const clearComparison = () => {
    setComparedProducts([]);
  };

  return {
    comparedProducts,
    addProductToCompare,
    removeProductFromCompare,
    clearComparison,
  };
};

export default useComparison;
