import type { ReactNode } from "react";
import Header from "../components/Header/Header"; 
import Footer from "../components/Footer/Footer";

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
