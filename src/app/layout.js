

import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone ",
  description: "Imdb clone social media project",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
         <Navbar />
         {/*   <SearchBox /> */}
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
