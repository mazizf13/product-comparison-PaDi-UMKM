import Layout from "@/components/Layout";
import CardContact from "@/components/card/CardContact";
import { contact, contactLinks, socialLinks } from "@/data/contact";
import {
  Phone,
  Instagram,
  Facebook,
  Twitter,
  MailsIcon,
  Youtube,
} from "lucide-react";
import React from "react";

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="flex justify-between text-[#444B55] md:container md:mx-auto lg:px-40">
        <div className="mb-10 w-screen p-7 md:p-0 lg:mt-12 lg:p-0 xl:mt-12 xl:p-0">
          <div className="mb-5">
            <div className="text-[48px] font-bold">{contact.title}</div>
            <p className="text-[16px] leading-6">
              {contact.desc1}
              <br />
              {contact.desc2}
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-4">
            <div className="flex w-full flex-col gap-4 lg:flex-row xl:flex-row">
              <CardContact cardTitle={contact.subTitle}>
                <div className="py-4">
                  {contactLinks.map((contactLink, index) => (
                    <div key={index}>
                      <h2 className="text-lg font-bold">{contactLink.name}</h2>
                      <span className="flex items-center">
                        <p className="pr-2">
                          {contactLink.name === "Email" ? (
                            <MailsIcon className="h-6 w-6" />
                          ) : (
                            <Phone className="h-6 w-6" />
                          )}
                        </p>
                        {contactLink.detail}
                      </span>
                    </div>
                  ))}
                  <p className="mt-2 text-lg font-bold">
                    Senin - Jumat | 08:00 - 17:00 WIB
                  </p>
                </div>
              </CardContact>
              <CardContact cardTitle={contact.subTitle2}>
                <h6 className="text-[16px] font-medium">
                  PaDi UMKM Headquarters
                </h6>
                <h6 className="text-[16px] font-medium">
                  Gedung Telkom Direktorat Business and Technology
                </h6>
                <p className="text-sm">
                  Jln. Prof. Dr. Soepomo No. 139, Jakarta Selatan, DKI Jakarta,
                  12810 Indonesia
                </p>
                <div className="mt-5">
                  <h3 className="text-[22px] font-bold">
                    Ikuti Media Sosial Kami
                  </h3>
                  <div className="mt-4 flex items-center justify-center space-x-2 xl:justify-start">
                    {socialLinks.map((socialLink, index) => (
                      <div className="cursor-pointer" key={index}>
                        <a
                          className="h-full w-full"
                          href={socialLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {socialLink.name === "Instagram" && (
                            <Instagram className="h-8 w-8" />
                          )}
                          {socialLink.name === "Facebook" && (
                            <Facebook className="h-8 w-8" />
                          )}
                          {socialLink.name === "Twitter" && (
                            <Twitter className="h-8 w-8" />
                          )}
                          {socialLink.name === "Youtube" && (
                            <Youtube className="h-8 w-8" />
                          )}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContact>
            </div>
          </div>
          <div className="mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.042131415892!2d107.58926129229269!3d-6.873423436961501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e767e572539b%3A0xd9d0847b9cbb3fb8!2sTelkom%20Direktorat%20Digital%20Business!5e1!3m2!1sid!2sid!4v1724899614208!5m2!1sid!2sid"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-lg shadow"
              title="Telkom Direktorat Digital Business"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
