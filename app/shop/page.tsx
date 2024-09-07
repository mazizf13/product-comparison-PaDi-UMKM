"use client";

import LayoutShop from "@/components/LayoutShop";
import CardProduct from "@/components/product/CardProduct";
import ComparisonPopup from "@/components/product/ComparisonDialog";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
    <LayoutShop>
      <Breadcrumb>
        <BreadcrumbList className="mt-2 p-4 md:px-36">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Beranda</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Produk</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-bold">Tas</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="container mx-auto p-4 md:px-36">
        <div className="sticky top-[112px] z-50 w-full">
          <Button
            variant="default"
            size="lg"
            className="mb-4 w-full rounded-lg bg-[#009EA9] px-4 py-2 text-white hover:bg-[#228d94]"
            onClick={handleCompareClick}
          >
            Bandingkan Produk
          </Button>
        </div>
        <p className="mb-8">Centang checkbox untuk membandingkan produk</p>

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
    </LayoutShop>
  );
};

export default Shop;
