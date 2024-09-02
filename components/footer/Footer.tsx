import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#F6F9FC]">
      <div className="mx-10 py-6 text-center text-[#5C5C6B]">
        <div className="text-paletteText-inactive text-base">
          © {currentYear}{" "}
          <Link
            href="https://padiumkm.id"
            target="_blank"
            className="hover:text-[#009EA9] hover:underline"
          >
            Pasar Digital UMKM Indonesia
          </Link>
          . All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
