import Footer from "./footer/Footer";
import NavBarShop from "./product/header/NavBarShop";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <NavBarShop />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
