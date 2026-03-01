"use client";

import { useState, useEffect } from "react";
import { useI18n, type Lang } from "@/lib/i18n";

export function Navbar() {
    const { lang, setLang, t } = useI18n();
    const [isOpen, setIsOpen] = useState(false);

    // Evita el body scroll cuando el navbar mobile drawer esta abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    const navLinks = [
        { href: "#tours", label: t("nav.tours") },
        { href: "#transfers", label: t("nav.transfers") },
        { href: "#experiencias", label: t("nav.exp") },
        { href: "#descubrir", label: t("nav.disc") },
        { href: "#nosotros", label: t("nav.about") },
        { href: "#eventos", label: t("nav.events") },
        { href: "#faq", label: t("nav.faq") },
        { href: "#contacto", label: t("nav.contact") },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-[900] h-[60px] lg:h-[68px] bg-[#1A1209]/95 backdrop-blur-md flex items-center justify-between px-[18px] lg:px-10 border-b border-inver-gold/20">
                <div className="font-heading font-black text-[24px] lg:text-[28px] text-inver-gold-light tracking-[2px] leading-none">
                    INVER
                    <small className="block font-sans text-[9px] tracking-[4px] font-light text-inver-cream/45 -mt-0.5">
                        TURISMO · URUGUAY
                    </small>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-inver-cream text-[13px] py-[7px] px-3 rounded font-medium transition-all hover:text-inver-gold-light hover:bg-inver-gold/10"
                        >
                            {link.label}
                        </a>
                    ))}

                    {/* Lang selector Desktop */}
                    <div className="flex gap-1 ml-4">
                        {(["es", "en", "pt"] as Lang[]).map((l) => (
                            <button
                                key={l}
                                onClick={() => setLang(l)}
                                className={`py-1 px-2.5 rounded border border-inver-gold/35 text-[11px] font-bold tracking-[1px] font-sans transition-all 
                  ${lang === l
                                        ? "bg-inver-gold border-inver-gold text-inver-dark"
                                        : "bg-transparent text-inver-cream"
                                    }
                `}
                            >
                                {l.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    <a href="#contacto" className="ml-4 btn btn-gold btn-sm">
                        {t("nav.book")}
                    </a>
                </div>

                {/* Hamburger Mobile */}
                <button
                    className="lg:hidden flex flex-col justify-between w-[26px] h-[18px] bg-transparent border-none p-0 relative"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Menu"
                >
                    <span className={`block w-full h-[2px] bg-inver-cream rounded-[2px] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
                    <span className={`block w-full h-[2px] bg-inver-cream rounded-[2px] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-full h-[2px] bg-inver-cream rounded-[2px] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
                </button>
            </nav>

            {/* Mobile Drawer */}
            <div
                className={`fixed top-[60px] left-0 right-0 z-[850] bg-inver-dark overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] border-b border-inver-gold/10 lg:hidden
        ${isOpen ? "max-h-[100dvh]" : "max-h-0"}`}
            >
                <div className="flex flex-col p-[18px] pb-[28px]">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-inver-cream text-[15px] font-medium py-[13px] border-b border-inver-cream/5 last:border-0"
                            style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                            {link.label}
                        </a>
                    ))}

                    <div className="flex gap-2 mt-5">
                        {(["es", "en", "pt"] as Lang[]).map((l) => (
                            <button
                                key={l}
                                onClick={() => {
                                    setLang(l);
                                    setIsOpen(false);
                                }}
                                style={{ WebkitTapHighlightColor: "transparent" }}
                                className={`flex-1 py-2.5 rounded-md border-[1.5px] text-[12px] font-bold tracking-[1px] transition-all
                  ${lang === l
                                        ? "bg-inver-gold border-inver-gold text-inver-dark"
                                        : "bg-transparent border-inver-gold/35 text-inver-cream"
                                    }
                `}
                            >
                                {l.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
