import { Input } from "../ui/input";
import { Product } from "@/data/product";
import { MapPin, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface CardProductProps {
  product: Product;
  isChecked: boolean;
  onCompareSelect: (selected: boolean, product: Product) => void;
  compareCount: number;
}

const CardProduct: React.FC<CardProductProps> = ({
  product,
  isChecked,
  onCompareSelect,
  compareCount,
}) => {
  const [viewCount, setViewCount] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const storedViews = localStorage.getItem(`viewCount_${product.id}`);
      return storedViews ? parseInt(storedViews, 10) : product.totalViews;
    }
    return product.totalViews;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(`viewCount_${product.id}`, viewCount.toString());
    }
  }, [viewCount, product.id]);

  const handleCheckboxChange = () => {
    onCompareSelect(!isChecked, product);
  };

  return (
    <div className="relative cursor-pointer rounded-lg border p-4 shadow-md transition-shadow hover:shadow-lg">
      <Link
        href={`/product/${product.id}`}
        passHref
        onClick={() => setViewCount(viewCount + 1)}
      >
        <img
          src={product.img}
          alt={product.name}
          className="h-auto w-full transform rounded transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <h3 className="mt-2 text-xl font-semibold">{product.name}</h3>
        <p className="mt-1 text-gray-600">{product.description}</p>
        <p className="mt-2 text-lg font-bold">
          Rp {product.price.toLocaleString("id-ID")}
        </p>

        <div className="mt-2 flex items-center text-sm text-gray-500">
          <MapPin className="mr-1" size={16} />
          <span>{product.location}</span>
        </div>

        <div className="mt-2 flex items-center text-sm text-gray-500">
          <ShoppingCart className="mr-1" size={16} />
          <span>Terjual: {product.totalSold}</span>
        </div>

        <div className="mt-2 flex items-center text-sm text-gray-500">
          <Star className="mr-1 text-yellow-500" size={16} />
          <span>{product.rating.toFixed(1)}</span>
        </div>
      </Link>

      <Input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="absolute right-4 top-4 h-6 w-6 cursor-pointer"
      />

      <div className="absolute bottom-4 right-4 text-sm text-gray-500">
        {compareCount} x dibandingkan | {viewCount} x dilihat
      </div>
    </div>
  );
};

export default CardProduct;
