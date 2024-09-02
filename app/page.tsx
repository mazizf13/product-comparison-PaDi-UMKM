import { home } from "../data/home";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import React from "react";

const Beranda: React.FC = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col md:mx-auto">
          <section
            className="relative flex h-full w-full items-start overflow-hidden bg-gradient-to-r from-[#D6FCFF] to-[#29BBD4] md:h-[380px] lg:h-[472px] xl:h-[472px]" // Menghapus dark mode
          >
            <div className="mx-10 my-10 flex h-full w-full flex-col items-center justify-center gap-6 lg:mx-40 lg:my-0 lg:flex-row xl:mx-40 xl:my-0 xl:flex-row">
              <div className="flex w-full flex-col items-start justify-start text-[#002022]">
                <div className="mb-4">
                  <h1 className="text-xl font-bold text-[#002022] md:text-[28px] lg:text-[28px] lg:leading-[42px] xl:text-[28px]">
                    {home.title}
                  </h1>
                  <p className="text-wrap pb-2 pt-4 text-sm text-[#444B55] md:text-sm lg:text-sm xl:text-sm">
                    {home.description}
                  </p>
                </div>
                <div>
                  <Button
                    variant="default"
                    className="bg-[#009EA9] hover:bg-[#65b6bb]"
                  >
                    Selengkapnya
                  </Button>
                </div>
              </div>

              <div className="flex w-full transform items-center justify-center overflow-hidden rounded-[15px] transition-all duration-300 hover:scale-105 lg:w-[70%] lg:rounded-[30px] xl:w-[70%] xl:rounded-[30px]">
                <img
                  src="https://info.padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.c32bfb9e.jpg&w=3840&q=75"
                  alt="Hero"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Beranda;
