"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Tours } from "@/components/sections/Tours";
import { Transfers, Experiencias, DescubrirUY } from "@/components/sections/Sections";
import { Nosotros, Eventos, FAQ } from "@/components/sections/Informational";
import { Contacto, Footer, FloatingWhatsApp } from "@/components/sections/Footer";

export default function Home() {

  useEffect(() => {
    // Intersection Observer global logic para las animaciones (.reveal)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex min-h-[100dvh] flex-col w-full relative">
      <Navbar />

      <Hero />
      <StatsBar />
      <div className="relative z-20">
        <Tours />
        <Transfers />
        <Experiencias />
        <DescubrirUY />
        <Nosotros />
        <Eventos />
        <FAQ />
        <Contacto />
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
