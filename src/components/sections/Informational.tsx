"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export function Nosotros() {
    const { t } = useI18n();

    return (
        <section id="nosotros" className="section bg-inver-dark text-inver-cream">
            <div className="container">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-[52px] items-start">
                    <div className="reveal bg-gradient-to-br from-[#2C1F0E] via-[#3D2B0F] to-[#1A1209] rounded-[14px] p-7 px-6 border border-inver-gold/20 w-full">
                        <div className="font-heading font-black text-[clamp(46px,13vw,72px)] text-inver-gold-light leading-none">INVER</div>
                        <div className="text-[10px] tracking-[3px] text-inver-cream/35 mb-6 uppercase font-bold">{t("nos.box.sub")}</div>

                        <div className="flex flex-col gap-[18px]">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex gap-3">
                                    <div className="w-[9px] h-[9px] rounded-full bg-inver-gold shrink-0 mt-[5px]" />
                                    <div>
                                        <strong className="block text-inver-cream text-[13px] mb-0.5">{t(`nos.box.${i}.t`)}</strong>
                                        <p className="text-[12px] text-inver-cream/50 leading-[1.55]">{t(`nos.box.${i}.d`)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="tag">{t("nos.tag")}</p>
                        <h2 className="title text-inver-cream">{t("nos.title")}</h2>
                        <p className="lead text-inver-cream/55 mb-7">{t("nos.lead")}</p>

                        <div className="flex flex-col gap-4 mt-[26px]">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex gap-[13px] items-start">
                                    <div className="w-[33px] h-[33px] rounded-full border border-inver-gold flex items-center justify-center text-[11px] text-inver-gold font-bold shrink-0">
                                        0{i}
                                    </div>
                                    <div>
                                        <h4 className="text-inver-cream text-[14px] font-semibold mb-0.5">{t(`nos.val.${i}.t`)}</h4>
                                        <p className="text-[13px] text-inver-cream/50 leading-[1.5]">{t(`nos.val.${i}.d`)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Eventos() {
    const { t } = useI18n();

    return (
        <section id="eventos" className="section bg-inver-cream">
            <div className="container">
                <p className="tag">{t("ev.tag")}</p>
                <h2 className="title">{t("ev.title")}</h2>

                <div className="reveal bg-gradient-to-br from-inver-dark to-inver-dark2 rounded-[14px] p-8 px-5 text-inver-cream mb-6 relative overflow-hidden flex flex-col md:grid md:grid-cols-[1fr_auto] items-center gap-7">
                    <div className="absolute right-3 top-2.5 text-[150px] opacity-[0.03] text-inver-gold leading-none pointer-events-none">✦</div>
                    <div>
                        <h3 className="font-heading text-[24px] mb-2.5">{t("ev.hero.t")}</h3>
                        <p className="text-inver-cream/60 text-[14px] leading-[1.7] md:mb-0 mb-5">{t("ev.hero.d")}</p>
                    </div>
                    <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || "59892417630"}?text=Hola!%20Quiero%20organizar%20un%20evento`} target="_blank" rel="noreferrer" className="btn btn-wa btn-md shrink-0 w-full md:w-auto">
                        📱 {t("ev.hero.btn")}
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                        { i: 1, c: "🏢" }, { i: 2, c: "💍" }, { i: 3, c: "🎓" }
                    ].map(({ i, c }) => (
                        <div key={i} className="reveal bg-white rounded-[10px] p-[22px] px-[18px] border-t-[3px] border-inver-gold shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-transform active:-translate-y-0.5 lg:hover:-translate-y-1 lg:hover:shadow-[0_10px_26px_rgba(0,0,0,0.08)]">
                            <div className="text-[26px] mb-2.5 leading-none">{c}</div>
                            <h4 className="font-heading text-[16px] mb-1.5 font-bold">{t(`ev.${i}.t`)}</h4>
                            <p className="text-[13px] text-inver-muted leading-[1.6]">{t(`ev.${i}.d`)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function FAQ() {
    const { t } = useI18n();
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="section bg-inver-cream2">
            <div className="container max-w-[780px]">
                <p className="tag">{t("faq.tag")}</p>
                <h2 className="title">{t("faq.title")}</h2>

                <div className="flex flex-col gap-2.5 mt-9 lg:grid lg:grid-cols-2 lg:gap-3 items-start">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-white rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.05)] overflow-hidden transition-colors border border-transparent">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full p-[17px] px-[18px] flex items-center justify-between gap-2.5 bg-transparent border-none text-left font-sans text-[14px] font-semibold text-inver-text hover:bg-black/5 transition-colors focus:outline-none"
                                style={{ WebkitTapHighlightColor: "transparent" }}
                            >
                                {t(`faq.${i}.q`)}
                                <span className={`text-inver-gold text-[15px] shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}>
                                    ▾
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? "max-h-[300px]" : "max-h-0"}`}>
                                <div className="px-[18px] pb-4">
                                    <p className="text-[13px] text-inver-muted leading-[1.7]">{t(`faq.${i}.a`)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
