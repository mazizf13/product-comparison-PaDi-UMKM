interface ContactLink {
  name: string;
  detail: string;
  img: string;
}

interface SocialLink {
  name: string;
  img: string;
  url: string;
}

export const contact = {
  title: "Hubungi Kami",
  desc1: "Memiliki pertanyaan lebih lanjut seputar PaDi UMKM?",
  desc2: "Silakan menghubungi Kami secara langsung.",
  subTitle: "Layanan Informasi Pengguna",
  subTitle2: "Kantor Kami",
};

export const contactLinks: ContactLink[] = [
  {
    name: "Email",
    detail: "cs@padiumkm.id",
    img: "https://www.svgrepo.com/show/474042/email.svg",
  },
  {
    name: "Whatsapp",
    detail: "+62 812 9000 7820",
    img: "https://www.svgrepo.com/show/513060/whatsapp-128.svg",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    img: "https://info.padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffacebook.9b7a65b2.svg&w=48&q=75",
    url: "https://www.facebook.com/PaDiUMKM/",
  },
  {
    name: "Twitter",
    img: "https://info.padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwitter.838c6ecc.svg&w=48&q=75",
    url: "https://twitter.com/padiumkm",
  },
  {
    name: "Instagram",
    img: "https://info.padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstagram.fad71b51.svg&w=48&q=75",
    url: "https://www.instagram.com/PaDiUMKM/?__coig_restricted=1",
  },
  {
    name: "Youtube",
    img: "https://info.padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyoutube.8000ba58.svg&w=48&q=75",
    url: "https://www.youtube.com/channel/UCNJxGqjubc_Immhn30yk6OA",
  },
];
