import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Product } from "@/data/product";
import useAlert from "@/hooks/useAlert";
import {
  MapPin,
  ShoppingCart,
  Star,
  DollarSign,
  Tag,
  Printer,
  Ruler,
  Weight,
  Trash,
} from "lucide-react";
import { useState } from "react";

interface ComparisonPopupProps {
  products: Product[];
  onClose: () => void;
}

const ComparisonPopup: React.FC<ComparisonPopupProps> = ({
  products,
  onClose,
}) => {
  const [comparedProducts, setComparedProducts] = useState<Product[]>(products);
  const { isAlertVisible, alertMessage, showAlert, hideAlert } = useAlert();
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [isDeleteConfirmVisible, setIsDeleteConfirmVisible] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDeleteConfirmation = (product: Product) => {
    setProductToDelete(product);
    setIsDeleteConfirmVisible(true);
  };

  const handleDelete = () => {
    if (productToDelete && comparedProducts.length > 2) {
      const updatedProducts = comparedProducts.filter(
        (product) => product.id !== productToDelete.id,
      );
      setComparedProducts(updatedProducts);
      showAlert(`${productToDelete.name} berhasil dihapus`);
    }
    setIsDeleteConfirmVisible(false);
  };

  const handleAddToCart = (name: string) => {
    showAlert(`${name} telah ditambahkan ke keranjang`);
  };

  return (
    <>
      <Dialog open={comparedProducts.length > 0} onOpenChange={onClose}>
        <DialogContent className="max-h-[90vh] w-full max-w-5xl overflow-y-auto p-6">
          <DialogHeader>
            <DialogTitle>Product Comparison</DialogTitle>
          </DialogHeader>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="py-2 text-center font-semibold">
                    <Button
                      variant="default"
                      onClick={handlePrint}
                      size="sm"
                      className="mr-4 flex items-center rounded-md bg-[#009EA9] text-white transition-colors hover:bg-[#32acb5]"
                    >
                      <Printer className="mr-1" size={18} />
                      Download
                    </Button>
                  </th>
                  {comparedProducts.map((product) => (
                    <th
                      key={product.id}
                      className="border-l border-gray-300 px-6 text-center"
                    >
                      <img
                        src={product.img}
                        alt={product.name}
                        className="mx-auto mb-4 h-28 w-28 rounded-md object-cover"
                      />
                      <span className="block font-semibold">
                        {product.name}
                      </span>
                      <div className="mt-2 flex justify-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteConfirmation(product)}
                          className="flex items-center"
                          disabled={comparedProducts.length <= 2}
                        >
                          <Trash className="mr-1" size={18} />
                          Delete
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleAddToCart(product.name)}
                          className="flex items-center"
                        >
                          <ShoppingCart className="mr-1" size={18} />
                          Add to Cart
                        </Button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 text-left font-semibold">
                    <span>Deskripsi</span>
                  </td>
                  {comparedProducts.map((product) => (
                    <td
                      key={product.id}
                      className="border-l border-gray-300 px-4 py-2 text-center"
                    >
                      <p>{product.description}</p>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 text-left font-semibold">
                    <DollarSign className="mr-2 inline-block" size={18} />
                    <span>Harga</span>
                  </td>
                  {comparedProducts.map((product) => (
                    <td
                      key={product.id}
                      className="border-l border-gray-300 py-4 text-center"
                    >
                      <span>Rp {product.price.toLocaleString("id-ID")}</span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 text-left font-semibold">
                    <MapPin className="mr-2 inline-block" size={18} />
                    <span>Lokasi</span>
                  </td>
                  {comparedProducts.map((product) => (
                    <td
                      key={product.id}
                      className="border-l border-gray-300 py-4 text-center"
                    >
                      <span>{product.location}</span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 text-left font-semibold">
                    <Tag className="mr-2 inline-block" size={18} />
                    <span>Bahan</span>
                  </td>
                  {comparedProducts.map((product) => (
                    <td
                      key={product.id}
                      className="border-l border-gray-300 py-4 text-center"
                    >
                      <span>{product.material}</span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 text-left font-semibold">
                    <Ruler className="mr-2 inline-block" size={18} />
                    <span>Ukuran</span>
                  </td>
                  {comparedProducts.map((product) => (
                    <td
                      key={product.id}
                      className="border-l border-gray-300 py-4 text-center"
                    >
                      <span>{product.size}</span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 text-left font-semibold">
                    <Weight className="mr-2 inline-block" size={18} />
                    <span>Berat</span>
                  </td>
                  {comparedProducts.map((product) => (
                    <td
                      key={product.id}
                      className="border-l border-gray-300 py-4 text-center"
                    >
                      <span>{product.weight}</span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 text-left font-semibold">
                    <Star className="mr-2 inline-block" size={18} />
                    <span>Rating</span>
                  </td>
                  {comparedProducts.map((product) => (
                    <td
                      key={product.id}
                      className="border-l border-gray-300 py-4 text-center"
                    >
                      <span>{product.rating.toFixed(1)}</span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 text-left font-semibold">
                    <ShoppingCart className="mr-2 inline-block" size={18} />
                    <span>Terjual</span>
                  </td>
                  {comparedProducts.map((product) => (
                    <td
                      key={product.id}
                      className="border-l border-gray-300 py-4 text-center"
                    >
                      <span>{product.totalSold}</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <Dialog
            open={isDeleteConfirmVisible}
            onOpenChange={() => setIsDeleteConfirmVisible(false)}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Konfirmasi Hapus Produk</DialogTitle>
              </DialogHeader>
              <p>Apakah Anda yakin ingin menghapus {productToDelete?.name}?</p>
              <div className="mt-4 flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setIsDeleteConfirmVisible(false)}
                >
                  Batal
                </Button>
                <Button
                  variant="default"
                  className="bg-red-500 text-white"
                  onClick={handleDelete}
                >
                  Hapus
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {isAlertVisible && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="rounded bg-white p-4 shadow-lg">
                <p>{alertMessage}</p>
                <Button
                  onClick={hideAlert}
                  className="mt-4 w-full bg-[#009EA9] text-white hover:bg-[#228d94]"
                >
                  OK
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ComparisonPopup;
