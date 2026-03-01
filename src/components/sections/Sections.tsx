"use client";

import { useI18n, type Lang } from "@/lib/i18n";
import { useState } from "react";
import { BookingModal } from "../ui/BookingModal";

export function Transfers() {
    const { t } = useI18n();
    const wpp = process.env.NEXT_PUBLIC_WHATSAPP || "59892417630";

    return (
        <section id="transfers" className="section bg-inver-dark text-inver-cream">
            <div className="container">
                <p className="tag">{t("tr.tag")}</p>
                <h2 className="title text-inver-cream">{t("tr.title")}</h2>
                <p className="lead text-inver-cream/55">{t("tr.lead")}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 lg:gap-[18px] mt-9">
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="reveal border border-inver-gold/20 rounded-xl p-6 px-5 bg-inver-gold/5 transition-all duration-300 lg:hover:border-inver-gold lg:hover:bg-inver-gold/10 lg:hover:-translate-y-1"
                        >
                            <div className="text-[32px] mb-3 leading-none">
                                {i === 1 ? "✈️" : i === 2 ? "🏖️" : i === 3 ? "⛵" : "🚐"}
                            </div>
                            <h3 className="font-heading text-[17px] text-inver-cream mb-2 font-bold">
                                {t(`tr.${i}.t`)}
                            </h3>
                            <p className="text-[13px] text-inver-cream/55 leading-[1.65]">
                                {t(`tr.${i}.d`)}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="reveal mt-8 bg-[#25D366]/5 border border-[#25D366]/20 rounded-xl py-6 px-5 text-center">
                    <p className="text-inver-cream/65 mb-4 text-[15px]">
                        {t("tr.wa.msg")}
                    </p>
                    <a
                        href={`https://wa.me/${wpp}?text=Hola!%20Necesito%20un%20transfer`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-wa btn-lg"
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
            <section id="experiencias" className="section bg-inver-cream">
                <div className="container">
                    <p className="tag">{t("exp.tag")}</p>
                    <h2 className="title">{t("exp.title")}</h2>

                    <div className="flex flex-col md:grid md:grid-cols-2 mt-9 rounded-[14px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.1)]">

                        <div className="reveal relative overflow-hidden py-8 px-[26px] bg-inver-green text-inver-cream group">
                            <div className="absolute -right-2 -bottom-2 text-[88px] opacity-[0.07] leading-none pointer-events-none group-hover:scale-110 transition-transform">🍷</div>
                            <p className="tag text-inver-cream/40 mb-2">{t("exp.1.tag")}</p>
                            <h3 className="font-heading font-bold text-[22px] mb-2.5 leading-[1.2]">{t("exp.1.t")}</h3>
                            <p className="text-[13px] leading-[1.7] opacity-80 mb-4">{t("exp.1.d")}</p>
                            <div className="flex flex-wrap gap-1.5 mb-3.5">
                                {["🍷 Degustación", "🍽️ Almuerzo", "🌿 Viñedos"].map((c) => (
                                    <span key={c} className="text-[11px] py-1 px-[11px] rounded bg-white/10 font-medium">{c}</span>
                                ))}
                            </div>
                            <button className="btn btn-gold btn-sm" onClick={() => setModal("bodega-almuerzo")}>
                                {t("tours.btn.book")}
                            </button>
                        </div>

                        <div className="reveal relative overflow-hidden py-8 px-[26px] bg-inver-dark2 text-inver-cream group">
                            <div className="absolute -right-2 -bottom-2 text-[88px] opacity-[0.07] leading-none pointer-events-none group-hover:scale-110 transition-transform">🌿</div>
                            <p className="tag text-inver-cream/40 mb-2">{t("exp.2.tag")}</p>
                            <h3 className="font-heading font-bold text-[22px] mb-2.5 leading-[1.2]">{t("exp.2.t")}</h3>
                            <p className="text-[13px] leading-[1.7] opacity-80 mb-4">{t("exp.2.d")}</p>
                            <div className="flex flex-wrap gap-1.5 mb-3.5">
                                {["🍷 Degustación", "📸 Viñedos", "🕐 Medio día"].map((c) => (
                                    <span key={c} className="text-[11px] py-1 px-[11px] rounded bg-white/10 font-medium">{c}</span>
                                ))}
                            </div>
                            <button className="btn btn-gold btn-sm" onClick={() => setModal("bodega-sin")}>
                                {t("tours.btn.book")}
                            </button>
                        </div>

                        <div className="reveal relative overflow-hidden py-8 px-[26px] bg-inver-cream2 text-inver-text border-t md:border-t-0 md:border-r border-[#e0d5c0]">
                            <div className="absolute -right-2 -bottom-2 text-[88px] opacity-[0.07] leading-none pointer-events-none">🌄</div>
                            <p className="tag mb-2 font-bold !text-inver-gold">{t("exp.3.tag")}</p>
                            <h3 className="font-heading font-bold text-[22px] mb-2.5 leading-[1.2]">{t("exp.3.t")}</h3>
                            <p className="text-[13px] leading-[1.7] opacity-80 mb-4">{t("exp.3.d")}</p>
                        </div>

                        <div className="reveal relative overflow-hidden py-8 px-[26px] bg-inver-gold text-inver-dark">
                            <div className="absolute -right-2 -bottom-2 text-[88px] opacity-[0.07] leading-none pointer-events-none">⭐</div>
                            <p className="tag mb-2 !text-[#1a1209]/50">{t("exp.4.tag")}</p>
                            <h3 className="font-heading font-bold text-[22px] mb-2.5 leading-[1.2]">{t("exp.4.t")}</h3>
                            <p className="text-[13px] leading-[1.7] opacity-80 mb-4">{t("exp.4.d")}</p>
                            <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || "59892417630"}?text=Hola!%20Info%20sobre%20Bodegas%20Privadas`} target="_blank" className="btn bg-transparent border-[1.5px] border-inver-dark text-inver-dark hover:bg-inver-dark hover:text-inver-gold btn-sm">
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
    const facts = [
        { i: 1, c: "🏙️" }, { i: 2, c: "🌊" }, { i: 3, c: "🏘️" },
        { i: 4, c: "🍷" }, { i: 5, c: "♨️" }, { i: 6, c: "🐄" }
    ];

    return (
        <section id="descubrir" className="section bg-inver-cream2">
            <div className="container">
                <p className="tag">{t("disc.tag")}</p>
                <h2 className="title">{t("disc.title")}</h2>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-7 md:gap-11 items-start mt-6">
                    <div className="h-[210px] md:h-[360px] w-full rounded-[14px] bg-gradient-to-br from-inver-green via-inver-green-light to-inver-gold flex items-center justify-center text-[68px] relative overflow-hidden shrink-0">
                        🌿
                        <div className="absolute bottom-2 right-4 font-heading font-black text-[78px] text-white/5 leading-none pointer-events-none">
                            UY
                        </div>
                    </div>

                    <div>
                        <p className="lead !max-w-none text-inver-text mb-3 font-medium">{t("disc.lead")}</p>
                        <p className="text-[14px] text-inver-muted leading-[1.75] font-light">{t("disc.p2")}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 mt-9">
                    {facts.map(({ i, c }) => (
                        <div key={i} className="reveal bg-white rounded-[10px] p-4 border-l-[3px] border-inver-gold shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-transform active:translate-x-1 lg:hover:translate-x-1 lg:hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                            <h4 className="font-heading text-[15px] font-bold mb-1">{c} {t(`disc.${i}.t`)}</h4>
                            <p className="text-[12px] text-inver-muted leading-[1.55]">{t(`disc.${i}.d`)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
