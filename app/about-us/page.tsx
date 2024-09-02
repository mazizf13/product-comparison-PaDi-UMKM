import Layout from "@/components/Layout";
import { about } from "@/data/about";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <Layout>
      <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden md:h-[380px] lg:h-[472px] xl:h-[472px]">
        <img
          src="https://picsum.photos/1600/900"
          alt="Banner"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 p-5 text-center text-white">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Tentang Kami
          </h1>
          <p className="mt-2 text-sm md:text-lg lg:text-xl">
            Mengenal PaDi UMKM yang hadir sebagai Marketplace B2B tepercaya di
            Indonesia, yang merupakan solusi bisnis bagi UMKM, BUMN, Perusahaan
            swasta, dan Pemerintah.
          </p>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="mt-10 flex w-full flex-row flex-wrap justify-between overflow-hidden text-[#444B55]">
        <section className="flex w-full flex-col items-center justify-between px-10 py-10 md:px-0 lg:flex-row lg:px-0 xl:flex-row xl:px-0">
          <div className="w-full md:py-10 md:pl-32 lg:w-1/2 lg:py-10 lg:pl-32 xl:w-1/2 xl:py-10 xl:pl-32">
            <div>
              <h1 className="text-[34px] font-bold">{about.visi.title}</h1>
              <p className="pl-6 text-[16px]">{about.visi.description}</p>
            </div>

            <div className="mt-7">
              <h1 className="text-[34px] font-bold">{about.misi.title}</h1>
              <ul className="list-disc pl-6 text-justify text-[16px]">
                {about.misi.description.map((description, index) => (
                  <li key={index} className="py-2">
                    {description}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative w-full flex-col items-center justify-start p-2 md:flex md:p-10 lg:flex lg:w-1/2 lg:p-10 xl:flex xl:w-1/2 xl:p-10">
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://info.padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvision-section.0fa77441.png&w=1080&q=75"
                className="w-2/3"
                alt="Vision"
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;
