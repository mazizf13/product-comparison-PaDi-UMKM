"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
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

  const isLoginPage = pathname === "/login";

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
            <Link href="/">
              <span
                className={`text-[18px] hover:text-[#009EA9] ${pathname === "/" ? "active-link" : ""}`}
              >
                Beranda
              </span>
            </Link>
          </li>
          <li className="group cursor-pointer">
            <Link href="/about-us">
              <span
                className={`text-[18px] hover:text-[#009EA9] ${pathname === "/about-us" ? "active-link" : ""}`}
              >
                Tentang Kami
              </span>
            </Link>
          </li>
          <li className="group cursor-pointer">
            <Link href="/help">
              <span
                className={`text-[18px] hover:text-[#009EA9] ${pathname === "/help" ? "active-link" : ""}`}
              >
                Bantuan
              </span>
            </Link>
          </li>
          <li className="group cursor-pointer">
            <Link href="/media">
              <span
                className={`text-[18px] hover:text-[#009EA9] ${pathname === "/media" ? "active-link" : ""}`}
              >
                Media
              </span>
            </Link>
          </li>
          <li className="group cursor-pointer">
            <Link href="/contact">
              <span
                className={`text-[18px] hover:text-[#009EA9] ${pathname === "/contact" ? "active-link" : ""}`}
              >
                Kontak
              </span>
            </Link>
          </li>
          <li className="group cursor-pointer">
            <div className="cursor-pointer rounded-lg border-[1px] border-[#009EA9] px-3 py-2 text-[#009EA9]">
              <Link href="/shop">Belanja di PaDi UMKM</Link>
            </div>
          </li>
          {isAuthenticated && !isLoginPage && (
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
            <Link href="/">
              <span
                className={`text-[18px] hover:text-[#009EA9] ${pathname === "/" ? "active-link" : ""}`}
              >
                Beranda
              </span>
            </Link>
          </li>
          <li className="group cursor-pointer">
            <Link href="/about-us">
              <span
                className={`text-[18px] hover:text-[#009EA9] ${pathname === "/about-us" ? "active-link" : ""}`}
              >
                Tentang Kami
              </span>
            </Link>
          </li>
          <li className="group cursor-pointer">
            <Link href="/help">
              <span
                className={`text-[18px] hover:text-[#009EA9] ${pathname === "/help" ? "active-link" : ""}`}
              >
                Bantuan
              </span>
            </Link>
          </li>
          <li className="group cursor-pointer">
            <Link href="/media">
              <span
                className={`text-[18px] hover:text-[#009EA9] ${pathname === "/media" ? "active-link" : ""}`}
              >
                Media
              </span>
            </Link>
          </li>
          <li className="group cursor-pointer">
            <Link href="/contact">
              <span
                className={`text-[18px] hover:text-[#009EA9] ${pathname === "/contact" ? "active-link" : ""}`}
              >
                Kontak
              </span>
            </Link>
          </li>
          <div className="cursor-pointer rounded-lg border-[1px] border-[#009EA9] px-3 py-2 text-[#009EA9]">
            <Link href="/shop">Belanja di PaDi UMKM</Link>
          </div>
          {isAuthenticated && !isLoginPage && (
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
    </nav>
  );
};

export default NavBar;
