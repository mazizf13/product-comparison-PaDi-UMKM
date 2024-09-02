export interface About {
  visi: {
    title: string;
    description: string;
  };
  misi: {
    title: string;
    description: string[];
  };
}

export const about: About = {
  visi: {
    title: "Visi Kami",
    description:
      "Menjadi ekosistem digital unggulan UMKM di seluruh Indonesia.",
  },
  misi: {
    title: "Misi Kami",
    description: [
      "Menyediakan platform B2B Marketplace dengan fitur layanan global untuk UMKM di Indonesia.",
      "Menjadi pusat informasi pengadaan (eProcurement) BUMN dan Luar BUMN yang dapat dipantau Kementerian BUMN secara real time dan transparan",
      "Menyajikan informasi mengenai indikator utama dari aktivitas transaksi yang lengkap melalui Control Tower Dashboard.",
      "Membangun sistem perdagangan elektronik yang stabil untuk memastikan kelangsungan program dan menjaga kedaulatan data transaksi PaDi UMKM.",
    ],
  },
};
