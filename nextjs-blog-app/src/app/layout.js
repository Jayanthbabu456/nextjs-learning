import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./header/page";
import Footer from "./footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-screen flex flex-col justify-between">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
