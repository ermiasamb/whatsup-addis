"use client";
import "../globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/layout/AppSidebar/page";
import Navbar from "@/components/layout/NavBar/navPage";
import MainLayout from "@/components/layout/MainLayout/page";
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
          <AuthProvider>
            <Navbar />
          </AuthProvider>
        </div>

        {/* Sidebar & Main Content */}
        <div>
          <AuthProvider>
            <SidebarProvider>
              <MainLayout>{children}</MainLayout>
            </SidebarProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
