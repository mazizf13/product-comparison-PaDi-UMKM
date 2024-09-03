export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  location: string;
  totalSold: number;
  rating: number;
  img: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Tas Tote Kulit",
    description:
      "Tas tote kulit yang stylish, sempurna untuk penggunaan sehari-hari.",
    price: 89.99,
    location: "Jakarta, Indonesia",
    totalSold: 150,
    rating: 4.5,
    img: "https://picsum.photos/id/1/300/200",
  },
  {
    id: 2,
    name: "Ransel Kanvas",
    description: "Ransel kanvas yang tahan lama dengan banyak kompartemen.",
    price: 69.99,
    location: "Bandung, Indonesia",
    totalSold: 120,
    rating: 4.3,
    img: "https://picsum.photos/id/2/300/200",
  },
  {
    id: 3,
    name: "Tas Duffel Perjalanan",
    description: "Tas duffel yang luas, ideal untuk perjalanan dan gym.",
    price: 79.99,
    location: "Surabaya, Indonesia",
    totalSold: 100,
    rating: 4.7,
    img: "https://picsum.photos/id/3/300/200",
  },
  {
    id: 4,
    name: "Tas Selempang",
    description:
      "Tas selempang yang ringkas dengan tali yang dapat disesuaikan.",
    price: 39.99,
    location: "Yogyakarta, Indonesia",
    totalSold: 85,
    rating: 4.2,
    img: "https://picsum.photos/id/4/300/200",
  },
  {
    id: 5,
    name: "Tas Kerja",
    description: "Tas kerja profesional untuk laptop dan dokumen.",
    price: 119.99,
    location: "Jakarta, Indonesia",
    totalSold: 200,
    rating: 4.8,
    img: "https://picsum.photos/id/5/300/200",
  },
  {
    id: 6,
    name: "Ransel Hiking",
    description: "Ransel hiking yang kuat dengan reservoir hidrasi.",
    price: 89.99,
    location: "Bandung, Indonesia",
    totalSold: 95,
    rating: 4.4,
    img: "https://picsum.photos/id/6/300/200",
  },
  {
    id: 7,
    name: "Dompet Mode",
    description: "Dompet elegan untuk acara khusus.",
    price: 49.99,
    location: "Surabaya, Indonesia",
    totalSold: 60,
    rating: 4.1,
    img: "https://picsum.photos/id/7/300/200",
  },
  {
    id: 8,
    name: "Sleeve Laptop",
    description: "Sleeve berlapis untuk melindungi laptop Anda.",
    price: 29.99,
    location: "Jakarta, Indonesia",
    totalSold: 130,
    rating: 4.6,
    img: "https://picsum.photos/id/8/300/200",
  },
  {
    id: 9,
    name: "Tas Weekender",
    description: "Tas yang sempurna untuk liburan akhir pekan.",
    price: 99.99,
    location: "Yogyakarta, Indonesia",
    totalSold: 110,
    rating: 4.5,
    img: "https://picsum.photos/id/9/300/200",
  },
  {
    id: 10,
    name: "Tas Gym",
    description: "Tas gym yang fungsional dengan kompartemen sepatu.",
    price: 59.99,
    location: "Bandung, Indonesia",
    totalSold: 140,
    rating: 4.3,
    img: "https://picsum.photos/id/10/300/200",
  },
  {
    id: 11,
    name: "Tas Messenger",
    description: "Tas messenger klasik dengan penutup flap.",
    price: 79.99,
    location: "Surabaya, Indonesia",
    totalSold: 90,
    rating: 4.4,
    img: "https://picsum.photos/id/11/300/200",
  },
  {
    id: 12,
    name: "Ransel Mini",
    description: "Ransel mini yang trendi untuk acara santai.",
    price: 49.99,
    location: "Jakarta, Indonesia",
    totalSold: 80,
    rating: 4.2,
    img: "https://picsum.photos/id/12/300/200",
  },
  {
    id: 13,
    name: "Organizer Perjalanan",
    description: "Jaga barang-barang penting perjalanan Anda tetap teratur.",
    price: 34.99,
    location: "Yogyakarta, Indonesia",
    totalSold: 75,
    rating: 4.0,
    img: "https://picsum.photos/id/13/300/200",
  },
  {
    id: 14,
    name: "Tote Ramah Lingkungan",
    description: "Tas tote berkelanjutan yang terbuat dari bahan daur ulang.",
    price: 39.99,
    location: "Bandung, Indonesia",
    totalSold: 110,
    rating: 4.3,
    img: "https://picsum.photos/id/14/300/200",
  },
  {
    id: 15,
    name: "Duffel Tahan Air",
    description: "Tas duffel tahan air untuk petualangan di luar ruangan.",
    price: 89.99,
    location: "Surabaya, Indonesia",
    totalSold: 95,
    rating: 4.5,
    img: "https://picsum.photos/id/15/300/200",
  },
  {
    id: 16,
    name: "Dompet Selempang",
    description:
      "Dompet selempang yang ringkas untuk membawa barang-barang penting.",
    price: 29.99,
    location: "Jakarta, Indonesia",
    totalSold: 140,
    rating: 4.4,
    img: "https://picsum.photos/id/16/300/200",
  },
  {
    id: 17,
    name: "Satchel Vintage",
    description: "Satchel vintage dengan perangkat keras kuningan.",
    price: 79.99,
    location: "Bandung, Indonesia",
    totalSold: 100,
    rating: 4.7,
    img: "https://picsum.photos/id/17/300/200",
  },
  {
    id: 18,
    name: "Tas Bahu",
    description: "Tas bahu klasik dengan tali yang dapat disesuaikan.",
    price: 59.99,
    location: "Surabaya, Indonesia",
    totalSold: 85,
    rating: 4.2,
    img: "https://picsum.photos/id/18/300/200",
  },
  {
    id: 19,
    name: "Tas Duffel Olahraga",
    description: "Tas duffel olahraga dengan kompartemen bernapas.",
    price: 69.99,
    location: "Yogyakarta, Indonesia",
    totalSold: 120,
    rating: 4.3,
    img: "https://picsum.photos/id/19/300/200",
  },
  {
    id: 20,
    name: "Tas Tangan Mewah",
    description: "Tas tangan mewah dengan finishing premium.",
    price: 199.99,
    location: "Jakarta, Indonesia",
    totalSold: 70,
    rating: 4.9,
    img: "https://picsum.photos/id/20/300/200",
  },
  {
    id: 21,
    name: "Tas Tangan Mewah",
    description: "Tas tangan mewah dengan finishing premium.",
    price: 199.99,
    location: "Jakarta, Indonesia",
    totalSold: 70,
    rating: 4.9,
    img: "https://picsum.photos/id/21/300/200",
  },
];
