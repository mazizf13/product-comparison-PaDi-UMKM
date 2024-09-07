"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bell,
  LayoutGrid,
  Menu,
  MessageCircle,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
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

        <div className="hidden cursor-pointer items-start space-x-3 lg:flex">
          <LayoutGrid className="h-6 w-6 text-slate-300" />
          <span className="text-[18px]">Kategori</span>
        </div>

        <div className="hidden items-center space-x-2 rounded-lg border border-gray-300 px-3 py-1 active:border-gray-600 md:w-[620px] lg:flex">
          <Input
            type="text"
            defaultValue="Tas"
            className="bg-transparent text-gray-800"
          />
          <Search className="h-6 w-6 cursor-pointer text-gray-800" />
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

        <ul className="ml-2 hidden items-center space-x-8 lg:flex">
          <li className="cursor-pointer">
            <Bell className="h-6 w-6 text-gray-800" />
          </li>
          <li className="cursor-pointer">
            <ShoppingCart className="h-6 w-6 text-gray-800" />
          </li>
          <li className="cursor-pointer">
            <MessageCircle className="h-6 w-6 text-gray-800" />
          </li>
          <li className="flex cursor-pointer items-center space-x-2">
            <img
              src="https://w7.pngwing.com/pngs/122/453/png-transparent-computer-icons-user-profile-avatar-female-profile-heroes-head-woman-thumbnail.png"
              alt="Evi"
              className="h-8 w-8 rounded-full"
            />
            <span>Evi</span>
          </li>
          {isAuthenticated && !isLoginPage && (
            <li className="cursor-pointer">
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

      {/* Mobile Search Bar */}
      <div className="mx-4 mt-2 flex items-center space-x-2 rounded-lg border border-gray-300 px-3 active:border-gray-600 lg:hidden">
        <Input
          type="text"
          value="Tas"
          className="bg-transparent text-gray-800"
        />
        <Search className="h-6 w-6 cursor-pointer text-gray-800" />
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 transform bg-white text-gray-800 transition-transform lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50 p-4`}
        style={{ top: "4rem", height: "calc(100vh - 4rem)" }}
      >
        <ul className="space-y-4">
          <li className="cursor-pointer">
            <Bell className="h-6 w-6 text-gray-800" />
          </li>
          <li className="cursor-pointer">
            <ShoppingCart className="h-6 w-6 text-gray-800" />
          </li>
          <li className="cursor-pointer">
            <MessageCircle className="h-6 w-6 text-gray-800" />
          </li>
          <li className="flex cursor-pointer items-center space-x-2">
            <img
              src="https://w7.pngwing.com/pngs/122/453/png-transparent-computer-icons-user-profile-avatar-female-profile-heroes-head-woman-thumbnail.png"
              alt="Evi Kunthi"
              className="h-8 w-8 rounded-full"
            />
            <span>Evi Kunthi</span>
          </li>
          {isAuthenticated && !isLoginPage && (
            <li className="w-full cursor-pointer">
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
