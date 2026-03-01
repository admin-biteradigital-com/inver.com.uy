"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { PartyPopper, Building, Gem, GraduationCap } from "lucide-react";

export function Nosotros() {
    const { t } = useI18n();

    return (
        <section id="nosotros" className="section bg-inver-dark text-inver-cream">
            <div className="container">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-[52px] items-start">
                    <div className="reveal bg-gradient-to-br from-[#2C1F0E] via-[#3D2B0F] to-[#1A1209] rounded-[14px] p-7 px-6 border border-inver-gold/20 w-full shadow-2xl">
                        <div className="font-heading font-black text-[clamp(46px,13vw,72px)] text-inver-gold-light leading-none">INVER</div>
                        <div className="text-[10px] tracking-[3px] text-inver-cream/35 mb-6 uppercase font-bold">{t("nos.box.sub")}</div>

                        <div className="flex flex-col gap-[18px]">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex gap-3">
                                    <div className="w-[9px] h-[9px] rounded-full bg-inver-gold shrink-0 mt-[5px]" />
                                    <div>
                                        <strong className="block text-inver-cream text-[13.5px] mb-0.5 tracking-wide">{t(`nos.box.${i}.t`)}</strong>
                                        <p className="text-[12px] text-inver-cream/50 leading-[1.55]">{t(`nos.box.${i}.d`)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="tag text-inver-gold border-inver-gold/30 bg-inver-gold/10">{t("nos.tag")}</p>
                        <h2 className="title text-inver-cream">{t("nos.title")}</h2>
                        <p className="lead text-inver-cream/55 mb-7">{t("nos.lead")}</p>

                        <div className="flex flex-col gap-4 mt-[26px]">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex gap-[15px] items-start">
                                    <div className="w-[36px] h-[36px] rounded-full border border-inver-gold flex items-center justify-center text-[12px] text-inver-gold font-bold shrink-0 bg-inver-gold/5">
                                        0{i}
                                    </div>
                                    <div>
                                        <h4 className="text-inver-cream text-[15px] font-semibold mb-1">{t(`nos.val.${i}.t`)}</h4>
                                        <p className="text-[13px] text-inver-cream/50 leading-[1.6]">{t(`nos.val.${i}.d`)}</p>
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
        <section id="eventos" className="section bg-[#F8F5F0]">
            <div className="container">
                <p className="tag">{t("ev.tag")}</p>
                <h2 className="title">{t("ev.title")}</h2>

                <div className="reveal bg-gradient-to-br from-inver-dark to-inver-dark2 rounded-[16px] p-10 px-6 sm:px-10 text-inver-cream mb-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 shadow-xl border border-inver-gold/10">
                    <PartyPopper className="absolute right-4 top-4 w-[180px] h-[180px] opacity-[0.03] text-inver-gold pointer-events-none" />
                    <div className="flex-1 relative z-10">
                        <h3 className="font-heading text-[28px] font-bold mb-3">{t("ev.hero.t")}</h3>
                        <p className="text-inver-cream/70 text-[15px] leading-[1.7] md:mb-0 mb-6 max-w-xl">{t("ev.hero.d")}</p>
                    </div>
                    <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || "59892417630"}?text=Hola!%20Quiero%20organizar%20un%20evento`} target="_blank" rel="noreferrer" className="btn btn-wa btn-lg shrink-0 w-full md:w-auto relative z-10 shadow-lg">
                        📱 {t("ev.hero.btn")}
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {[
                        { i: 1, Icon: Building }, { i: 2, Icon: Gem }, { i: 3, Icon: GraduationCap }
                    ].map(({ i, Icon }) => (
                        <div key={i} className="reveal bg-white rounded-[12px] p-[28px] px-[24px] border-t-[3px] border-inver-gold shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-transform active:-translate-y-0.5 lg:hover:-translate-y-1 lg:hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
                            <div className="text-inver-gold mb-5 bg-inver-gold/5 inline-flex p-3 rounded-full"><Icon size={26} strokeWidth={1.5} /></div>
                            <h4 className="font-heading text-[18px] mb-2 font-bold text-inver-dark">{t(`ev.${i}.t`)}</h4>
                            <p className="text-[13.5px] text-inver-muted leading-[1.65]">{t(`ev.${i}.d`)}</p>
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
        <section id="faq" className="section bg-white border-t border-[#F0EBE1]">
            <div className="container max-w-[800px]">
                <p className="tag">{t("faq.tag")}</p>
                <h2 className="title">{t("faq.title")}</h2>

                <div className="flex flex-col gap-3 mt-10 lg:grid lg:grid-cols-2 lg:gap-4 items-start">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-[#F8F5F0] rounded-[10px] shadow-sm overflow-hidden border border-transparent transition-all hover:shadow-md">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full p-5 flex items-center justify-between gap-3 bg-transparent border-none text-left font-sans text-[14.5px] font-semibold text-inver-dark hover:bg-black/5 transition-colors focus:outline-none"
                                style={{ WebkitTapHighlightColor: "transparent" }}
                            >
                                {t(`faq.${i}.q`)}
                                <span className={`text-inver-gold text-[16px] shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}>
                                    ▾
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? "max-h-[300px]" : "max-h-0"}`}>
                                <div className="px-5 pb-5 pt-1">
                                    <p className="text-[14px] text-inver-muted leading-[1.7]">{t(`faq.${i}.a`)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
