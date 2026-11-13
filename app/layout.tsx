import type { Metadata } from "next";
import {Lato, Nunito_Sans} from "next/font/google"
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tiny Library",
  description: "A small library.",
};
const lato = Lato({
  subsets:["latin"],
  display: "swap", 
  weight: "700",
  variable: "--lato-font"
}) 
const nunitoSans = Nunito_Sans({
  subsets:["latin"],
  display: "swap",
  variable: "--nunito-sans-font"
})
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en">
      <body className={`${lato.variable} ${nunitoSans.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
