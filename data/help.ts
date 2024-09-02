export interface HelpArticle {
  title: string;
  img: string;
  detail: {
    text: string;
    link: string;
  }[];
}

export interface HelpData {
  title: string;
  button: string;
  articels: HelpArticle[];
}

export const help: HelpData = {
  title: "Pilih Topik Sesuai Kendalamu",
  button: "Lihat Semua Artikel",
  articels: [
    {
      title: "Akun",
      img: "https://info.padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Finfo-padi%2Fuploads%2F2024%2F03%2Ffcab60fb-c1b9-4c5b-8748-c38f758af63e.png&w=64&q=75",
      detail: [
        {
          text: "Cara Buyer Batalkan Penawaran Tender Kilat",
          link: "https://info.padiumkm.id/help/articles/819/Cara%20Buyer%20Batalkan%20Penawaran%20Tender%20Kilat",
        },
        {
          text: "Cara Buyer Buat Tender Kilat",
          link: "https://info.padiumkm.id/help/articles/816/Cara%20Buyer%20Buat%20Tender%20Kilat",
        },
        {
          text: "Cara Login Akun Buyer B2B PaDi UMKM",
          link: "https://info.padiumkm.id/help/articles/516/Cara%20Login%20Akun%20Buyer%20B2B%20PaDi%20UMKM",
        },
        {
          text: "Cara Daftar Akun Admin Perusahaan",
          link: "https://info.padiumkm.id/help/articles/816/Cara%20Buyer%20Buat%20Tender%20Kilat",
        },
      ],
    },
    {
      title: "Pemesanan",
      img: "https://info.padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Finfo-padi%2Fuploads%2F2024%2F03%2F0b97fe8d-da31-4e6d-8d77-21b2e5d5a5d0.png&w=32&q=75",
      detail: [
        {
          text: "Cara Terima dan Checkout Tender Kilat",
          link: "https://info.padiumkm.id/help/articles/822/Cara%20Terima%20dan%20Checkout%20Tender%20Kilat",
        },
        {
          text: "Cara Belanja B2B dengan Termin",
          link: "https://info.padiumkm.id/help/articles/657/Cara%20Belanja%20B2B%20dengan%20Termin",
        },
        {
          text: "Bagaimana Cara Belanja B2B di PaDi UMKM",
          link: "https://info.padiumkm.id/help/articles/606/Bagaimana%20Cara%20Belanja%20B2B%20di%20PaDi%20UMKM",
        },
        {
          text: "Cara Menindaklanjuti Permintaan Pembelian oleh Manager",
          link: "https://info.padiumkm.id/help/articles/522/Cara%20Menindaklanjuti%20Permintaan%20Pembelian%20oleh%20Manager",
        },
      ],
    },
    {
      title: "Pembayaran & Perpajakan",
      img: "https://info.padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Finfo-padi%2Fuploads%2F2024%2F03%2F1f2b3ad2-54b9-4261-8c43-1e2bc625e609.png&w=32&q=75",
      detail: [
        {
          text: "Fitur Saldo Refund bagi Pembeli B2B PaDi UMKM",
          link: "https://info.padiumkm.id/help/articles/630/Fitur%20Saldo%20Refund%20bagi%20Pembeli%20B2B%20PaDi%20UMKM",
        },
        {
          text: "Pembayaran Tempo",
          link: "https://info.padiumkm.id/help/articles/609/Pembayaran%20Tempo",
        },
        {
          text: "Cara Revisi Pajak",
          link: "https://info.padiumkm.id/help/articles/531/Cara%20Revisi%20Pajak",
        },
        {
          text: "Pembayaran Langsung",
          link: "https://info.padiumkm.id/help/articles/531/Cara%20Revisi%20Pajak",
        },
      ],
    },
  ],
};
