import { Product, products } from "@/data/product";
import { useState, useEffect } from "react";

export const useProduct = (id: number | undefined) => {
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((product) => product.id === id);
      setProduct(foundProduct);
    }
  }, [id]);

  return product;
};
