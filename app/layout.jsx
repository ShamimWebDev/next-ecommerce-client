"use client";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <SessionProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          {/*  Toastify container */}
          <ToastContainer position="top-right" autoClose={3000} />
        </SessionProvider>
      </body>
    </html>
  );
}
