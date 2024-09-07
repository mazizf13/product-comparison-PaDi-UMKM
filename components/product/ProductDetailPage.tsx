"use client";

import { Button } from "../ui/button";
import LayoutShop from "@/components/LayoutShop";
import { useProduct } from "@/hooks/useProduct";
import {
  Columns,
  Hand,
  MapPin,
  Phone,
  Ruler,
  ShoppingCart,
  Star,
  Weight,
} from "lucide-react";
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
    <LayoutShop>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:mb-14 md:flex-row md:items-start">
          <img
            src={product.img}
            alt={product.name}
            className="h-auto w-full transform rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 md:w-1/2"
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
              <Ruler className="mr-1" size={20} />
              <span>Ukuran: {product.size}</span>
            </div>

            <div className="mt-2 flex items-center text-sm text-gray-500">
              <Weight className="mr-1" size={20} />
              <span>Berat: {product.weight}</span>
            </div>

            <div className="mt-2 flex items-center text-sm text-gray-500">
              <Star className="mr-1 text-yellow-500" size={20} />
              <span>{product.rating.toFixed(1)}</span>
            </div>

            <div className="mb-14 mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mr-36">
              <Button
                variant="default"
                className="w-full rounded bg-[#009EA9] px-4 py-2 text-white hover:bg-[#228d94]"
              >
                <ShoppingCart className="mr-2 h-6 w-6 text-white" />
                Keranjang
              </Button>
              <Button
                variant="outline"
                className="w-full rounded border-[#009EA9] px-6 py-3 text-[#009EA9] hover:bg-[#228d94] hover:text-white"
              >
                <Phone className="mr-2 h-6 w-6" />
                Chat Penjual
              </Button>
              <Button
                variant="outline"
                className="w-full rounded border-[#009EA9] px-6 py-3 text-[#009EA9] hover:bg-[#228d94] hover:text-white"
              >
                <Hand className="mr-2 h-6 w-6" />
                Ajukan Penawaran
              </Button>
              <Button
                variant="default"
                className="w-full rounded bg-[#009EA9] px-4 py-2 text-white hover:bg-[#228d94]"
              >
                <Columns className="mr-2 h-6 w-6 text-white" />
                Bandingkan Produk
              </Button>
            </div>
          </div>
        </div>
      </div>
    </LayoutShop>
  );
};

export default ProductDetailPage;
