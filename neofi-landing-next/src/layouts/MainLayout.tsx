import type { ReactNode } from "react";
import Header from "@/layouts/header/ui/Header"; 
import Footer from "@/layouts/footer/ui/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <div className="bg-hero-gradient min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default MainLayout;
