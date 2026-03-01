"use client";

import { useI18n } from "@/lib/i18n";
import Image from "next/image";

export function Hero() {
    const { t } = useI18n();

    return (
        <section id="hero" className="relative min-h-[100svh] flex flex-col items-center justify-center text-center pt-[90px] px-[22px] pb-[56px] overflow-hidden bg-inver-dark">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="INVER Turismo Uruguay"
                    fill
                    className="object-cover object-bottom"
                    priority
                    quality={90}
                />
            </div>

            {/* Gradient Overlay for Text Readability */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "linear-gradient(to bottom, rgba(26,18,9,0.3) 0%, rgba(26,18,9,0.85) 100%)",
                }}
            />

            {/* Pattern wrapper - Subtle texture */}
            <div
                className="absolute inset-0 opacity-[0.03] z-0"
                style={{
                    backgroundImage: "repeating-linear-gradient(45deg, #C8943A 0, #C8943A 1px, transparent 0, transparent 50%)",
                    backgroundSize: "18px 18px",
                }}
            />

            {/* Radial glow around center */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,148,58,0.15), transparent 70%)`
                }}
            />

            <div className="relative z-10 w-full animate-[slideUp_0.8s_ease-out]">
                <div className="inline-block border border-inver-gold/60 text-inver-gold-light text-[10px] tracking-[4px] py-1.5 px-4 rounded-[4px] mb-5 font-bold uppercase backdrop-blur-sm bg-black/20">
                    {t("hero.badge")}
                </div>

                <h1 className="font-heading font-black text-[clamp(58px,16vw,120px)] leading-[0.92] text-inver-cream drop-shadow-2xl">
                    {t("hero.title1")}
                    <em className="text-inver-gold-light block not-italic italic pr-4">
                        {t("hero.title2")}
                    </em>
                </h1>

                <p className="text-[#F5EDD8]/80 text-[15px] leading-[1.65] mt-[22px] mx-auto max-w-[340px] sm:max-w-[480px] sm:text-[17px] font-light drop-shadow-md">
                    {t("hero.sub")}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-[38px] items-center sm:justify-center">
                    <a href="#tours" className="btn btn-gold btn-lg min-w-[180px]">
                        {t("hero.cta1")}
                    </a>
                    <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || "59892417630"}`} target="_blank" rel="noreferrer" className="btn btn-outline-w btn-lg min-w-[180px] backdrop-blur-sm bg-black/10">
                        {t("hero.cta2")}
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-[22px] left-1/2 -translate-x-1/2 text-inver-cream/40 text-[10px] tracking-[3px] flex flex-col items-center gap-2 animate-[bounce_2s_infinite] z-10">
                SCROLL
                <div className="w-[1px] h-[30px] bg-gradient-to-b from-inver-gold/60 to-transparent" />
            </div>

            <style jsx global>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
}
