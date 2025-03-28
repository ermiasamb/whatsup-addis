"use client";
import "../globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/layout/AppSidebar/page";
import Navbar from "@/components/layout/NavBar/navPage";
import MainLayout from "@/components/layout/MainLayout/page";
import Footer from "@/components/layout/Footer/footer";
import { AuthProvider } from "../../context/AuthContext";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col">
        {/* Fixed Navbar */}
        <div className="fixed z-50 top-0 left-0 w-full ">
          <Navbar />
        </div>

        {/* Sidebar & Main Content */}
        <div>
          <SidebarProvider>
            <AuthProvider>
              <MainLayout>{children}</MainLayout>
            </AuthProvider>
          </SidebarProvider>
        </div>
        <footer className="lg:ml-[16rem]">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
