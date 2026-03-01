"use client";

import { useI18n } from "@/lib/i18n";

export function Hero() {
    const { t } = useI18n();

    return (
        <section id="hero" className="relative min-h-[100svh] flex flex-col items-center justify-center text-center pt-[90px] px-[22px] pb-[56px] overflow-hidden">
            {/* Backgrounds */}
            <div
                className="absolute inset-0 bg-inver-dark"
                style={{
                    background: "linear-gradient(160deg, #0D1F08, #1a3a0a 35%, #1A1209 65%, #0A0A05)",
                }}
            />

            {/* Pattern wrapper - Custom tailwind inline */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: "repeating-linear-gradient(45deg, #C8943A 0, #C8943A 1px, transparent 0, transparent 50%)",
                    backgroundSize: "18px 18px",
                }}
            />

            {/* Radial glow */}
            <div
                className="absolute inset-0"
                style={{
                    background: `
            radial-gradient(ellipse 70% 50% at 60% 35%, rgba(200,148,58,0.18), transparent 70%),
            radial-gradient(ellipse 60% 50% at 20% 80%, rgba(45,80,22,0.25), transparent 60%)
          `
                }}
            />

            <div className="relative z-10 w-full animate-[slideUp_0.8s_ease-out]">
                <div className="inline-block border border-inver-gold/60 text-inver-gold-light text-[10px] tracking-[4px] py-1.5 px-4 rounded-sm mb-5 font-semibold">
                    {t("hero.badge")}
                </div>

                <h1 className="font-heading font-black text-[clamp(58px,16vw,120px)] leading-[0.92] text-inver-cream drop-shadow-xl">
                    {t("hero.title1")}
                    <em className="text-inver-gold-light block not-italic italic pr-4">
                        {t("hero.title2")}
                    </em>
                </h1>

                <p className="text-[#F5EDD8]/60 text-[15px] leading-[1.65] mt-[18px] mx-auto max-w-[340px] sm:max-w-[460px] sm:text-[16px] font-light">
                    {t("hero.sub")}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-[34px] items-center sm:justify-center">
                    <a href="#tours" className="btn btn-gold btn-lg min-w-[180px]">
                        {t("hero.cta1")}
                    </a>
                    <a href="https://wa.me/59892417630" target="_blank" className="btn btn-outline-w btn-lg min-w-[180px]">
                        {t("hero.cta2")}
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-[22px] left-1/2 -translate-x-1/2 text-inver-cream/30 text-[10px] tracking-[3px] flex flex-col items-center gap-2 animate-[bounce_2s_infinite]">
                SCROLL
                <div className="w-[1px] h-[30px] bg-gradient-to-b from-inver-gold/50 to-transparent" />
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
