import React from "react";

const ImageCard: React.FC = () => {
  return (
    <div className="relative hidden w-full flex-col items-center justify-center space-y-7 bg-gradient-to-r from-[#0193AC] to-[#3EC4DB] p-10 lg:flex lg:max-w-screen-sm">
      <div className="flex flex-1 items-center justify-center">
        <div className="relative h-[270px] w-[300px]">
          <img
            className="h-full w-full"
            src="https://padiumkm.id/_next/static/media/login-card.067a7ac1.svg"
            alt="Login Card"
          />
        </div>
      </div>
      <div className="min-h-[144px] flex-1 space-y-4">
        <div className="text-center text-2xl font-bold text-white">
          Pasti Untung di PaDi UMKM!
        </div>
        <div className="text-center font-normal text-white">
          Berbagai promo dan penawaran menarik setiap bulannya!
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
