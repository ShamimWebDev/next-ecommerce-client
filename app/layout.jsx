"use client";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import { ShopProvider } from "../context/ShopContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <SessionProvider>
          <ShopProvider>
            <Navbar />
            <main className="grow">{children}</main>
            {/*  Toastify container */}
            <ToastContainer position="top-right" autoClose={3000} />
          </ShopProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
