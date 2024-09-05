"use client";

import { Button } from "../ui/button";
import { useProduct } from "@/hooks/useProduct";
import { MapPin, ShoppingCart, Star } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";

const ProductDetailPage: React.FC = () => {
  const params = useParams();
  const { id } = params;
  const product = useProduct(typeof id === "string" ? parseInt(id) : undefined);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:items-start">
        <img
          src={product.img}
          alt={product.name}
          className="w-full rounded-xl md:w-1/2"
        />

        <div className="md:ml-6 md:w-1/2">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <p className="mt-4 text-2xl font-semibold">
            Rp {product.price.toLocaleString("id-ID")}
          </p>

          <div className="mt-4 flex items-center text-sm text-gray-500">
            <MapPin className="mr-1" size={20} />
            <span>{product.location}</span>
          </div>

          <div className="mt-2 flex items-center text-sm text-gray-500">
            <ShoppingCart className="mr-1" size={20} />
            <span>Terjual: {product.totalSold}</span>
          </div>

          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Star className="mr-1 text-yellow-500" size={20} />
            <span>{product.rating.toFixed(1)}</span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <Button
              variant="default"
              className="rounded bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
            >
              + Keranjang
            </Button>
            <Button
              variant="outline"
              className="rounded border-blue-500 px-6 py-3 text-blue-500 hover:bg-blue-100"
            >
              Chat Penjual
            </Button>
            <Button
              variant="outline"
              className="rounded border-blue-500 px-6 py-3 text-blue-500 hover:bg-blue-100"
            >
              Ajukan Penawaran
            </Button>
            <Button
              variant="default"
              className="rounded bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
            >
              Bandingkan Produk
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
