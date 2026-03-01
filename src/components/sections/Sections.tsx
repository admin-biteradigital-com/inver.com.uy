"use client";

import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import Image from "next/image";
import { Plane, Waves, Sailboat, Car, Wine, Camera, MapPin, Star, Building, Sunrise, Leaf, Compass } from "lucide-react";
import { BookingModal } from "../ui/BookingModal";

export function Transfers() {
    const { t } = useI18n();
    const wpp = process.env.NEXT_PUBLIC_WHATSAPP || "59892417630";

    const getIcon = (i: number) => {
        if (i === 1) return <Plane className="w-[32px] h-[32px] text-inver-gold mb-4" strokeWidth={1.5} />;
        if (i === 2) return <Waves className="w-[32px] h-[32px] text-inver-gold mb-4" strokeWidth={1.5} />;
        if (i === 3) return <Sailboat className="w-[32px] h-[32px] text-inver-gold mb-4" strokeWidth={1.5} />;
        return <Car className="w-[32px] h-[32px] text-inver-gold mb-4" strokeWidth={1.5} />;
    };

    return (
        <section id="transfers" className="relative section text-inver-cream overflow-hidden min-h-[600px] flex items-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/transfer.png"
                    alt="Inver Transfers Premium"
                    fill
                    className="object-cover object-center scale-105"
                    quality={85}
                />
                <div className="absolute inset-0 bg-inver-dark/85 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-inver-dark via-transparent to-transparent opacity-80" />
            </div>

            <div className="container relative z-10 w-full">
                <p className="tag border-inver-gold/30 text-inver-gold bg-inver-gold/10">{t("tr.tag")}</p>
                <h2 className="title text-inver-cream drop-shadow-lg">{t("tr.title")}</h2>
                <p className="lead text-inver-cream/70 max-w-[600px] drop-shadow-md">{t("tr.lead")}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] mt-12">
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="reveal border border-inver-gold/20 rounded-[12px] p-7 bg-black/40 backdrop-blur-md transition-all duration-300 lg:hover:border-inver-gold/60 lg:hover:bg-black/60 lg:hover:-translate-y-1 shadow-xl"
                        >
                            {getIcon(i)}
                            <h3 className="font-heading text-[18px] text-inver-cream mb-2 font-bold tracking-wide">
                                {t(`tr.${i}.t`)}
                            </h3>
                            <p className="text-[13.5px] text-inver-cream/60 leading-[1.7]">
                                {t(`tr.${i}.d`)}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="reveal mt-12 bg-[#25D366]/10 border border-[#25D366]/30 rounded-[12px] py-7 px-6 text-center backdrop-blur-md max-w-[600px] mx-auto">
                    <p className="text-inver-cream/80 mb-5 text-[15.5px]">
                        {t("tr.wa.msg")}
                    </p>
                    <a
                        href={`https://wa.me/${wpp}?text=Hola!%20Necesito%20un%20transfer`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-wa btn-lg shadow-lg"
                    >
                        📱 {t("tr.wa.btn")}
                    </a>
                </div>
            </div>
        </section>
    );
}

export function Experiencias() {
    const { t } = useI18n();
    const [modal, setModal] = useState<string | null>(null);

    return (
        <>
            <section id="experiencias" className="section bg-[#F8F5F0]">
                <div className="container">
                    <p className="tag">{t("exp.tag")}</p>
                    <h2 className="title">{t("exp.title")}</h2>

                    <div className="flex flex-col md:grid md:grid-cols-2 mt-10 rounded-[16px] overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.06)] border border-inver-gold/10">

                        <div className="reveal relative overflow-hidden p-10 bg-gradient-to-br from-inver-green to-[#1A3A0A] text-inver-cream group">
                            <Wine className="absolute -right-4 -bottom-4 w-[160px] h-[160px] opacity-[0.04] text-white pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                            <p className="tag text-inver-cream/40 border-inver-cream/20 mb-3">{t("exp.1.tag")}</p>
                            <h3 className="font-heading font-bold text-[26px] mb-3 leading-[1.2]">{t("exp.1.t")}</h3>
                            <p className="text-[14px] leading-[1.75] opacity-80 mb-6 max-w-[90%]">{t("exp.1.d")}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {["🍷 Degustación", "🍽️ Almuerzo", "🌿 Viñedos"].map((c) => (
                                    <span key={c} className="text-[11.5px] py-1.5 px-3 rounded-[4px] bg-white/10 font-medium tracking-wide border border-white/5">{c}</span>
                                ))}
                            </div>
                            <button className="btn btn-gold btn-md px-8" onClick={() => setModal("bodega-almuerzo")}>
                                {t("tours.btn.book")}
                            </button>
                        </div>

                        <div className="reveal relative overflow-hidden p-10 bg-gradient-to-br from-inver-dark to-[#0A0A05] text-inver-cream group">
                            <Leaf className="absolute -right-4 -bottom-4 w-[150px] h-[150px] opacity-[0.04] text-white pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                            <p className="tag text-inver-cream/40 border-inver-cream/20 mb-3">{t("exp.2.tag")}</p>
                            <h3 className="font-heading font-bold text-[26px] mb-3 leading-[1.2]">{t("exp.2.t")}</h3>
                            <p className="text-[14px] leading-[1.75] opacity-80 mb-6 max-w-[90%]">{t("exp.2.d")}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {["🍷 Degustación", "📸 Viñedos", "🕐 Medio día"].map((c) => (
                                    <span key={c} className="text-[11.5px] py-1.5 px-3 rounded-[4px] bg-white/10 font-medium tracking-wide border border-white/5">{c}</span>
                                ))}
                            </div>
                            <button className="btn btn-gold btn-md px-8" onClick={() => setModal("bodega-sin")}>
                                {t("tours.btn.book")}
                            </button>
                        </div>

                        <div className="reveal relative overflow-hidden p-10 bg-white text-inver-text border-t md:border-t-0 md:border-r border-[#e0d5c0]/50 group">
                            <MapPin className="absolute -right-4 -bottom-4 w-[140px] h-[140px] opacity-[0.03] text-inver-dark pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                            <p className="tag mb-3 font-bold !text-inver-gold border-inver-gold/20">{t("exp.3.tag")}</p>
                            <h3 className="font-heading font-bold text-[26px] mb-3 leading-[1.2] text-inver-dark">{t("exp.3.t")}</h3>
                            <p className="text-[14px] leading-[1.75] opacity-80 mb-5 max-w-[90%]">{t("exp.3.d")}</p>
                        </div>

                        <div className="reveal relative overflow-hidden p-10 bg-gradient-to-br from-[#C8943A] to-[#E8B86D] text-inver-dark group">
                            <Star className="absolute -right-4 -bottom-4 w-[140px] h-[140px] opacity-[0.06] text-black pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                            <p className="tag mb-3 !text-[#1a1209]/60 border-inver-dark/20">{t("exp.4.tag")}</p>
                            <h3 className="font-heading font-bold text-[26px] mb-3 leading-[1.2]">{t("exp.4.t")}</h3>
                            <p className="text-[14px] leading-[1.75] opacity-80 mb-6 max-w-[90%]">{t("exp.4.d")}</p>
                            <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || "59892417630"}?text=Hola!%20Info%20sobre%20Bodegas%20Privadas`} target="_blank" rel="noreferrer" className="btn bg-transparent border-[1.5px] border-inver-dark text-inver-dark hover:bg-inver-dark hover:text-inver-gold btn-md px-8 font-semibold">
                                WhatsApp →
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <BookingModal isOpen={!!modal} onClose={() => setModal(null)} tourId={modal} />
        </>
    );
}

export function DescubrirUY() {
    const { t } = useI18n();

    // Replace emojis with elegant SVG icons from Lucide
    const facts = [
        { i: 1, Icon: Building },
        { i: 2, Icon: Waves },
        { i: 3, Icon: MapPin },
        { i: 4, Icon: Wine },
        { i: 5, Icon: Sunrise },
        { i: 6, Icon: Compass }
    ];

    return (
        <section id="descubrir" className="section bg-white border-t border-[#F0EBE1]">
            <div className="container">
                <p className="tag">{t("disc.tag")}</p>
                <h2 className="title">{t("disc.title")}</h2>

                <div className="flex flex-col xl:flex-row gap-10 xl:gap-14 items-center mt-8">
                    {/* Visual abstract elegant block instead of emoji square */}
                    <div className="h-[280px] w-full xl:w-[45%] rounded-[16px] bg-gradient-to-br from-[#1A3A0A] via-[#2A4A1A] to-inver-gold flex items-center justify-center relative overflow-hidden shrink-0 shadow-2xl">

                        {/* Overlay texture */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)", backgroundSize: "10px 10px" }} />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                        <Compass className="w-[100px] h-[100px] text-white/10 z-0 absolute" strokeWidth={1} />

                        <div className="relative z-10 flex flex-col items-center">
                            <span className="font-heading font-black text-[110px] text-white/90 leading-[0.8] tracking-tighter drop-shadow-xl">UY</span>
                            <span className="text-inver-gold text-[12px] font-bold tracking-[8px] uppercase mt-3 drop-shadow-md ml-2">Uruguay</span>
                        </div>
                    </div>

                    <div className="xl:flex-1">
                        <p className="lead !max-w-none text-inver-dark mb-4 font-heading text-[24px] italic leading-[1.4]">{t("disc.lead")}</p>
                        <p className="text-[15px] text-inver-muted leading-[1.8] font-light max-w-3xl">{t("disc.p2")}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                            {facts.map(({ i, Icon }) => (
                                <div key={i} className="reveal bg-[#F8F5F0] rounded-[10px] p-5 border-l-[3px] border-inver-gold shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] group">
                                    <div className="flex items-center gap-3 mb-2.5">
                                        <div className="w-8 h-8 rounded-full bg-inver-gold/10 flex items-center justify-center text-inver-gold group-hover:bg-inver-gold group-hover:text-white transition-colors">
                                            <Icon size={16} strokeWidth={2} />
                                        </div>
                                        <h4 className="font-heading text-[15.5px] font-bold text-inver-dark">{t(`disc.${i}.t`)}</h4>
                                    </div>
                                    <p className="text-[13px] text-inver-muted leading-[1.6] pl-11">{t(`disc.${i}.d`)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
