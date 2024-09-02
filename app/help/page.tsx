import Layout from "@/components/Layout";
import CardHelp from "@/components/card/CardHelp";
import { help } from "@/data/help";
import React from "react";

const Help = () => {
  return (
    <>
      <Layout>
        <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden md:h-[380px] lg:h-[472px] xl:h-[472px]">
          <img
            src="https://picsum.photos/1600/900"
            alt="Banner"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 p-5 text-center text-white">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Bantuan
            </h1>
            <p className="mt-2 text-sm md:text-lg lg:text-xl">
              Selamat datang di Layanan Bantuan PaDi UMKM, Ada yang bisa kami
              bantu?
            </p>
          </div>
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        <div className="flex w-full flex-row flex-wrap justify-between">
          <section className="flex w-full flex-col items-start px-5 py-5 text-center text-neutral-600 max-md:relative max-md:overflow-auto md:items-center lg:px-40 lg:py-20 xl:px-40 xl:py-20">
            <div className="mx-auto mb-2 flex w-[80px] justify-center rounded-full border border-b-4 border-[#4DB3C5] text-center" />
            <h1 className="p-2 text-xl font-bold md:text-4xl">{help.title}</h1>

            <div className="mt-10">
              <div className="flex grid-flow-row gap-0 text-neutral-600 sm:grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {help.articels.map((article, index) => (
                  <CardHelp
                    key={index}
                    cardTitle={article.title}
                    cardImg={article.img}
                    cardDescription={article.detail}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Help;
