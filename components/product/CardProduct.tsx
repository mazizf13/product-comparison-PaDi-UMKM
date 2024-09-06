import { Product } from "@/data/product";
import { MapPin, ShoppingCart, Star } from "lucide-react";
import React, { useState } from "react";

interface CardProductProps {
  product: Product;
  onCompareSelect: (selected: boolean, product: Product) => void;
}

const CardProduct: React.FC<CardProductProps> = ({
  product,
  onCompareSelect,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCheckboxChange = () => {
    setIsSelected(!isSelected);
    onCompareSelect(!isSelected, product);
  };

  return (
    <div className="relative cursor-pointer rounded-lg border p-4 shadow-md transition-shadow hover:shadow-lg">
      <img
        src={product.img}
        alt={product.name}
        className="h-auto w-full rounded"
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

      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleCheckboxChange}
        className="absolute right-4 top-4"
      />
    </div>
  );
};

export default CardProduct;
