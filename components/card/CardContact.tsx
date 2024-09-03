import React, { ReactNode } from "react";

interface CardContactProps {
  cardTitle: string;
  children: ReactNode;
}

const CardContact: React.FC<CardContactProps> = ({ cardTitle, children }) => {
  return (
    <div className="h-full min-h-[280px] w-full rounded-2xl border-[1px] border-[#DDF2E4] p-8">
      <h3 className="text-[22px] font-bold">{cardTitle}</h3>
      {children}
    </div>
  );
};

export default CardContact;
