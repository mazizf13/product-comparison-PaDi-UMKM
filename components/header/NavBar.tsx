"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import useAlert from "@/hooks/useAlert";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { isAlertVisible, alertMessage, showAlert, hideAlert } = useAlert(); // Use the alert hook

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsAuthenticated(loggedIn);
    }
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setShowLogoutDialog(false);
    router.push("/login");
  };

  const handleLinkClick = (path: string) => {
    if (!isAuthenticated) {
      showAlert("Anda harus login terlebih dahulu"); // Show alert message
      setTimeout(() => {
        router.push("/login"); // Redirect to login after showing alert
      }, 2000); // Delay to allow the user to see the alert
    } else {
      router.push(path);
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-white text-gray-800">
      <div className="flex items-center justify-between px-10 py-3 lg:px-20 xl:px-40">
        <div className="max-h-[87px] w-fit xl:w-52">
          <img
            src="https://info.padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo_PADI_UMKM.cc043879.svg&w=128&q=100"
            alt="Logo"
          />
        </div>

        <Button
          variant="outline"
          onClick={handleMenuToggle}
          className="flex items-center justify-center rounded-full p-2 text-gray-800 focus:outline-none lg:hidden"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        <ul className="hidden items-center space-x-10 text-gray-800 lg:flex">
          <li className="group cursor-pointer">
            <span
              onClick={() => handleLinkClick("/")}
              className={`text-[18px] hover:text-[#009EA9] ${pathname === "/" ? "active-link" : ""}`}
            >
              Beranda
            </span>
          </li>
          <li className="group cursor-pointer">
            <span
              onClick={() => handleLinkClick("/about-us")}
              className={`text-[18px] hover:text-[#009EA9] ${pathname === "/about-us" ? "active-link" : ""}`}
            >
              Tentang Kami
            </span>
          </li>
          <li className="group cursor-pointer">
            <span
              onClick={() => handleLinkClick("/help")}
              className={`text-[18px] hover:text-[#009EA9] ${pathname === "/help" ? "active-link" : ""}`}
            >
              Bantuan
            </span>
          </li>
          <li className="group cursor-pointer">
            <span
              onClick={() => handleLinkClick("/media")}
              className={`text-[18px] hover:text-[#009EA9] ${pathname === "/media" ? "active-link" : ""}`}
            >
              Media
            </span>
          </li>
          <li className="group cursor-pointer">
            <span
              onClick={() => handleLinkClick("/contact")}
              className={`text-[18px] hover:text-[#009EA9] ${pathname === "/contact" ? "active-link" : ""}`}
            >
              Kontak
            </span>
          </li>
          <li className="group cursor-pointer">
            <div className="cursor-pointer rounded-lg border-[1px] border-[#009EA9] px-3 py-2 text-[#009EA9]">
              <span onClick={() => handleLinkClick("/shop")}>
                Belanja di PaDi UMKM
              </span>
            </div>
          </li>
          {isAuthenticated && (
            <li className="group cursor-pointer">
              <Button
                variant="default"
                onClick={() => setShowLogoutDialog(true)}
                className="rounded-lg border-[1px] border-[#009EA9] bg-[#009EA9] px-3 py-2 text-white hover:bg-[#65b6bb]"
              >
                Logout
              </Button>
            </li>
          )}
        </ul>
      </div>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 transform bg-white text-gray-800 transition-transform lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"} z-50 p-4`}
        style={{ top: "4rem", height: "calc(100vh - 4rem)" }}
      >
        <ul className="space-y-4">
          <li className="group cursor-pointer">
            <span
              onClick={() => handleLinkClick("/")}
              className={`text-[18px] hover:text-[#009EA9] ${pathname === "/" ? "active-link" : ""}`}
            >
              Beranda
            </span>
          </li>
          <li className="group cursor-pointer">
            <span
              onClick={() => handleLinkClick("/about-us")}
              className={`text-[18px] hover:text-[#009EA9] ${pathname === "/about-us" ? "active-link" : ""}`}
            >
              Tentang Kami
            </span>
          </li>
          <li className="group cursor-pointer">
            <span
              onClick={() => handleLinkClick("/help")}
              className={`text-[18px] hover:text-[#009EA9] ${pathname === "/help" ? "active-link" : ""}`}
            >
              Bantuan
            </span>
          </li>
          <li className="group cursor-pointer">
            <span
              onClick={() => handleLinkClick("/media")}
              className={`text-[18px] hover:text-[#009EA9] ${pathname === "/media" ? "active-link" : ""}`}
            >
              Media
            </span>
          </li>
          <li className="group cursor-pointer">
            <span
              onClick={() => handleLinkClick("/contact")}
              className={`text-[18px] hover:text-[#009EA9] ${pathname === "/contact" ? "active-link" : ""}`}
            >
              Kontak
            </span>
          </li>
          <div className="cursor-pointer rounded-lg border-[1px] border-[#009EA9] px-3 py-2 text-[#009EA9]">
            <span onClick={() => handleLinkClick("/shop")}>
              Belanja di PaDi UMKM
            </span>
          </div>
          {isAuthenticated && (
            <li className="group w-full cursor-pointer">
              <Button
                variant="default"
                onClick={() => setShowLogoutDialog(true)}
                className="rounded-lg border-[1px] border-[#009EA9] bg-[#009EA9] px-3 py-2 text-white hover:bg-[#65b6bb]"
              >
                Logout
              </Button>
            </li>
          )}
        </ul>
      </div>

      <AlertDialog open={showLogoutDialog}>
        <AlertDialogTrigger />
        <AlertDialogContent>
          <p>Anda telah logout. Silakan login kembali.</p>
          <Button
            onClick={handleLogout}
            className="bg-[#009EA9] hover:bg-[#65b6bb]"
          >
            OK
          </Button>
        </AlertDialogContent>
      </AlertDialog>

      {/* Alert dialog for login required */}
      {isAlertVisible && (
        <AlertDialog open={isAlertVisible} onOpenChange={hideAlert}>
          <AlertDialogTrigger />
          <AlertDialogContent>
            <p>{alertMessage}</p>
            <Button
              onClick={hideAlert}
              className="bg-[#009EA9] hover:bg-[#65b6bb]"
            >
              OK
            </Button>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </nav>
  );
};

export default NavBar;
