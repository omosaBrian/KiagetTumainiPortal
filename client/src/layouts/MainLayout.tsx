import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Announcement from "@/components/Announcement";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen font-['Roboto'] bg-gray-50 text-gray-800">
      <Header />
      <Announcement />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
