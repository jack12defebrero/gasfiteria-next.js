"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Home from "@/app/pages/Home";
import About from "@/app/pages/about";
import Services from "@/app/pages/services";
import Contact from "@/app/pages/contact";

export default function Page() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar onNavigate={setCurrentPage} />
      <main className="container mx-auto p-6">{renderContent()}</main>
    </div>
  );
}
