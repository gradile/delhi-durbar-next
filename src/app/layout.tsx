import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Menu } from "@/components/layout/SideBarMenu";

export default function RootLayout({
  children
}: {
  children
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="container">
          <div className="menu"><Menu /></div>
          <div className="content">
            {children}
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
