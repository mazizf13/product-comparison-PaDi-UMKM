import { Button } from "../ui/button";
import React from "react";

interface CardHelpProps {
  cardTitle: string;
  cardImg: string;
  cardDescription: {
    text: string;
    link: string;
  }[];
}

const CardHelp: React.FC<CardHelpProps> = ({
  cardTitle,
  cardImg,
  cardDescription,
}) => {
  return (
    <div className="mb-10 p-2 text-left">
      <div className="flex h-full min-w-[250px] flex-col rounded-lg border border-gray-200 bg-white p-4 lg:min-w-[250px] xl:min-w-[333px]">
        <div className="mb-3 flex items-center">
          <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full">
            <img src={cardImg} alt={`${cardTitle} icon`} />
          </div>
          <h2 className="text-lg font-bold text-black">{cardTitle}</h2>
        </div>
        <div className="flex flex-grow flex-col justify-between">
          <ul className="mb-3">
            {cardDescription.map((detail, index) => (
              <li
                key={index}
                className="cursor-pointer p-1 text-[16px] font-medium text-[#686E76] hover:text-[#009EA9]"
              >
                <a href={detail.link} rel="noopener noreferrer" target="_blank">
                  {detail.text}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <Button
              variant="outline"
              className="border-[#009EA9] text-[#009EA9] hover:bg-[#009EA9] hover:text-white"
            >
              Lihat semua artikel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHelp;
