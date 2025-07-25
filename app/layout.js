import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";

export const metadata = {
  title: "Blue Nest",
  description: "Generated by create next app",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400" ,"800","600"],
  variable: "--font-playfair",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${poppins.className} ${playfair.variable}  `}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
