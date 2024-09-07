"use client";

import "@/app/globals.css";
import ImageCard from "@/components/ImageCard";
import Layout from "@/components/Layout";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      localStorage.removeItem("isLoggedIn");
      setAlertMessage("Anda telah logout. Silakan login kembali.");
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "padi@umkm.id" && password === "12345678") {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/";
    } else {
      setAlertMessage("Email atau kata sandi salah!");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Layout>
      <div className="flex w-full flex-row flex-wrap justify-between">
        <section className="flex w-full flex-col items-start px-5 py-5 text-center max-md:relative max-md:overflow-auto md:items-center lg:px-40 lg:py-20 xl:px-40 xl:py-20">
          <div className="h-fit w-full max-w-screen-lg overflow-hidden rounded-lg lg:flex">
            <ImageCard />

            <div className="flex h-full w-full flex-col items-center justify-center border border-gray-300 p-10 lg:h-full">
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <div className="text-paletteText-primary text-2xl font-bold">
                    Login
                  </div>
                  <Link href="/">
                    <div className="relative h-24 w-24 cursor-pointer">
                      <img
                        className="h-full w-full"
                        alt="logo"
                        src="https://padiumkm.id/_next/static/media/logo.08a5ef96.svg"
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="w-full">
                <form onSubmit={handleLogin}>
                  <div className="mb-4">
                    <div className="justify-start text-left">
                      <Label htmlFor="email">Alamat Email</Label>
                    </div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="padi@umkm.id"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border border-slate-300 active:border-slate-500"
                    />
                  </div>
                  <div className="relative mb-4">
                    <div className="justify-start text-left">
                      <Label htmlFor="password">Kata Sandi</Label>
                    </div>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="12345678"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-slate-300 active:border-slate-500"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        {showPassword ? (
                          <Eye className="h-5 w-5 text-gray-500" />
                        ) : (
                          <EyeOff className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    variant="default"
                    className="w-full bg-[#0193AC] hover:bg-[#3fabbe]"
                  >
                    Login
                  </Button>
                </form>

                <div className="mt-4 space-y-2 text-center">
                  <div>
                    <span className="text-sm font-light">
                      Lupa Kata Sandi?{" "}
                    </span>
                    <Link
                      href="/forgot-password"
                      className="text-sm font-semibold text-[#0193AC] hover:underline"
                    >
                      Tekan Disini
                    </Link>
                  </div>
                  <div className="text-sm text-slate-500">Atau</div>
                  <div>
                    <span className="text-sm font-light">
                      Belum punya akun?{" "}
                    </span>
                    <Link
                      href="/register"
                      className="text-sm font-semibold text-[#0193AC] hover:underline"
                    >
                      Daftar Sekarang
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {alertMessage && (
        <AlertDialog open>
          <AlertDialogTrigger />
          <AlertDialogContent>
            <p>{alertMessage}</p>
            <Button
              onClick={() => setAlertMessage("")}
              className="bg-[#0193AC] hover:bg-[#3fabbe]"
            >
              OK
            </Button>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </Layout>
  );
};

export default Login;
