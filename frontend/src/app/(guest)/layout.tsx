import Navbar from "@/components/layout/NavBar/navPage";
import React from "react";
import "../globals.css";
import Footer from "@/components/layout/Footer/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html>
        <head>
          <meta charSet="UTF-8" />
        </head>
        <body className="bg-gradient-to-b from-slate-900  to-lime-500">
          <main>
            <Navbar />
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </>
  );
};
export default Layout;
