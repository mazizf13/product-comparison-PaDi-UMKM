import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Product } from "@/data/product";
import {
  MapPin,
  ShoppingCart,
  Star,
  DollarSign,
  Tag,
  Printer,
} from "lucide-react";

interface ComparisonPopupProps {
  products: Product[];
  onClose: () => void;
}

const ComparisonPopup: React.FC<ComparisonPopupProps> = ({
  products,
  onClose,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog open={products.length > 0} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] w-full max-w-5xl overflow-y-auto p-6">
        <DialogHeader>
          <DialogTitle>Product Comparison</DialogTitle>
        </DialogHeader>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 text-left">
                  <Button
                    variant="default"
                    onClick={handlePrint}
                    className="flex items-center rounded-md bg-[#009EA9] text-white transition-colors hover:bg-[#32acb5]"
                  >
                    <Printer className="mr-1" size={18} />
                    Download
                  </Button>
                </th>
                {products.map((product) => (
                  <th
                    key={product.id}
                    className="border-l border-gray-300 px-6 text-center"
                  >
                    <img
                      src={product.img}
                      alt={product.name}
                      className="mx-auto mb-4 h-28 w-28 rounded-md object-cover"
                    />
                    <span className="block font-semibold">{product.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 text-left font-semibold">
                  <span>Deskripsi</span>
                </td>
                {products.map((product) => (
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
                  <Tag className="mr-2 inline-block" size={18} />
                  <span>Material</span>
                </td>
                {products.map((product) => (
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
                  <DollarSign className="mr-2 inline-block" size={18} />
                  <span>Price</span>
                </td>
                {products.map((product) => (
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
                  <Star
                    className="mr-2 inline-block text-yellow-500"
                    size={18}
                  />
                  <span>Rating</span>
                </td>
                {products.map((product) => (
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
                  <MapPin className="mr-2 inline-block" size={18} />
                  <span>Location</span>
                </td>
                {products.map((product) => (
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
                  <ShoppingCart className="mr-2 inline-block" size={18} />
                  <span>Sold</span>
                </td>
                {products.map((product) => (
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
      </DialogContent>
    </Dialog>
  );
};

export default ComparisonPopup;
