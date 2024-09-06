"use client";

import Layout from "@/components/Layout";
import CardProduct from "@/components/product/CardProduct";
import ComparisonPopup from "@/components/product/ComparisonDialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { products } from "@/data/product";
import useAlert from "@/hooks/useAlert";
import useComparison from "@/hooks/useComparison";
import React, { useState } from "react";

const Shop = () => {
  const {
    comparedProducts,
    addProductToCompare,
    removeProductFromCompare,
    clearComparison,
  } = useComparison();

  const { isAlertVisible, alertMessage, showAlert, hideAlert } = useAlert();
  const [showComparison, setShowComparison] = useState(false);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<number[]>([]);

  const handleCompareSelect = (selected: boolean, product: any) => {
    if (selected) {
      if (comparedProducts.length >= 5) {
        showAlert("Maksimal 5 produk dapat dibandingkan.");
        return;
      }
      addProductToCompare(product);
      setSelectedCheckboxes([...selectedCheckboxes, product.id]);
    } else {
      removeProductFromCompare(product.id);
      setSelectedCheckboxes(
        selectedCheckboxes.filter((id) => id !== product.id),
      );
    }
  };

  const handleCompareClick = () => {
    if (comparedProducts.length < 2) {
      showAlert("Pilih minimal 2 produk untuk dibandingkan.");
    } else {
      setShowComparison(true);
    }
  };

  const handleClosePopup = () => {
    setShowComparison(false);
    clearComparison();
    setSelectedCheckboxes([]);
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="mb-6 text-3xl font-bold">Belanja di PaDi UMKM</h1>

        <Button
          variant="default"
          size="lg"
          className="mb-6 w-full rounded bg-[#009EA9] px-4 py-2 text-white hover:bg-[#32acb5]"
          onClick={handleCompareClick}
        >
          Bandingkan Produk
        </Button>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <CardProduct
              key={product.id}
              product={product}
              isChecked={selectedCheckboxes.includes(product.id)}
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

        <Dialog open={isAlertVisible} onOpenChange={hideAlert}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Pemberitahuan</DialogTitle>
              <DialogDescription>{alertMessage}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default Shop;
