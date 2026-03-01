"use client";

import { useI18n } from "@/lib/i18n";
import { useState } from "react";

export function Contacto() {
    const { t } = useI18n();
    const wpp = process.env.NEXT_PUBLIC_WHATSAPP || "59892417630";
    const [formData, setFormData] = useState({ n: "", e: "", s: "Tours", m: "" });

    const onSubmit = () => {
        const text = `📩 *CONSULTA INVER*
👤 ${formData.n || "Sin nombre"}
✉️ ${formData.e || "Sin email"}
📌 ${formData.s}

${formData.m}`;
        window.open(`https://wa.me/${wpp}?text=${encodeURIComponent(text)}`, "_blank");
    };

    return (
        <section id="contacto" className="section bg-inver-dark2 text-inver-cream">
            <div className="container">
                <p className="tag">{t("con.tag")}</p>
                <h2 className="title text-inver-cream">{t("con.title")}</h2>
                <p className="lead text-inver-cream/55">{t("con.lead")}</p>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-[32px] md:gap-[44px] mt-9">
                    <div className="flex flex-col gap-[18px]">
                        {[
                            { i: "📞", t: t("con.p.t"), d: "+598 92 417 630\n+598 91 274 848 (24h)" },
                            { i: "📍", t: t("con.d.t"), d: "Inca 2069 | CP 11800\nMontevideo, Uruguay" },
                            { i: "✉️", t: "Email", d: "reservas@inver.com.uy", l: "mailto:reservas@inver.com.uy" },
                            { i: "🌐", t: "Web", d: "www.inver.com.uy", l: "http://www.inver.com.uy" },
                            { i: "📱", t: "WhatsApp", d: "+598 92 417 630", l: `https://wa.me/${wpp}` }
                        ].map((c, i) => (
                            <div key={i} className="flex gap-[13px] items-start">
                                <div className="w-[42px] h-[42px] rounded-lg bg-inver-gold/10 flex items-center justify-center text-[18px] shrink-0">
                                    {c.i}
                                </div>
                                <div>
                                    <h4 className="text-inver-cream text-[13px] font-semibold mb-0.5">{c.t}</h4>
                                    {c.l ? (
                                        <a href={c.l} target="_blank" rel="noreferrer" className="text-inver-cream/55 text-[13px] hover:text-inver-gold-light transition-colors whitespace-pre-line block leading-[1.5]">
                                            {c.d}
                                        </a>
                                    ) : (
                                        <p className="text-inver-cream/55 text-[13px] leading-[1.5] whitespace-pre-line">
                                            {c.d}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="reveal bg-inver-gold/5 border border-inver-gold/20 rounded-[14px] p-[26px] px-5">
                        <h3 className="font-heading text-[20px] text-inver-cream mb-5 font-bold">{t("con.form.t")}</h3>

                        <div className="space-y-[14px]">
                            <div>
                                <label className="block text-inver-cream/70 text-[12px] font-semibold mb-[5px] tracking-[0.3px]">{t("con.form.n")}</label>
                                <input
                                    type="text"
                                    value={formData.n}
                                    onChange={(e) => setFormData({ ...formData, n: e.target.value })}
                                    className="w-full p-[13px] px-[14px] border-[1.5px] border-inver-gold/25 rounded-lg bg-white/5 text-inver-cream outline-none focus:border-inver-gold text-[15px] placeholder:text-inver-cream/25 font-sans"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-inver-cream/70 text-[12px] font-semibold mb-[5px] tracking-[0.3px]">{t("con.form.e")}</label>
                                <input
                                    type="email"
                                    value={formData.e}
                                    onChange={(e) => setFormData({ ...formData, e: e.target.value })}
                                    className="w-full p-[13px] px-[14px] border-[1.5px] border-inver-gold/25 rounded-lg bg-white/5 text-inver-cream outline-none focus:border-inver-gold text-[15px] placeholder:text-inver-cream/25 font-sans"
                                    placeholder="tu@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-inver-cream/70 text-[12px] font-semibold mb-[5px] tracking-[0.3px]">{t("con.form.s")}</label>
                                <select
                                    value={formData.s}
                                    onChange={(e) => setFormData({ ...formData, s: e.target.value })}
                                    className="w-full p-[13px] px-[14px] border-[1.5px] border-inver-gold/25 rounded-lg bg-white/5 text-inver-cream outline-none focus:border-inver-gold text-[15px] font-sans appearance-none"
                                >
                                    {t("con.form.opions").split(",").map(opt => (
                                        <option key={opt} value={opt} className="bg-inver-dark text-inver-cream">{opt}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-inver-cream/70 text-[12px] font-semibold mb-[5px] tracking-[0.3px]">{t("con.form.m")}</label>
                                <textarea
                                    value={formData.m}
                                    onChange={(e) => setFormData({ ...formData, m: e.target.value })}
                                    className="w-full p-[13px] px-[14px] border-[1.5px] border-inver-gold/25 rounded-lg bg-white/5 text-inver-cream outline-none focus:border-inver-gold min-h-[72px] resize-y text-[15px] placeholder:text-inver-cream/25 font-sans"
                                    placeholder="..."
                                />
                            </div>
                            <button onClick={onSubmit} className="btn btn-gold btn-full btn-lg mt-[14px] !py-4">
                                📱 {t("con.form.btn")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    const { t } = useI18n();

    return (
        <footer className="bg-inver-dark pt-11 px-[18px] pb-[22px] border-t border-inver-gold/10">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-9 mb-8">
                    <div className="col-span-2 md:col-span-1">
                        <div className="font-heading text-[26px] font-black text-inver-gold-light leading-none">INVER</div>
                        <div className="text-[9px] tracking-[3px] text-inver-cream/30 mb-2.5 mt-0.5">TURISMO · URUGUAY · 15 AÑOS</div>
                        <p className="text-[12px] text-inver-cream/40 leading-[1.7]">
                            {t("hero.sub")}
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h5 className="text-[10px] tracking-[3px] text-inver-gold-light mb-3 font-bold uppercase">Tours</h5>
                        {["Montevideo", "Punta del Este", "Colonia"].map(l => (
                            <a key={l} href="#tours" className="text-inver-cream/40 text-[12px] no-underline mb-2 hover:text-inver-gold-light transition-colors">{l}</a>
                        ))}
                        <a href="#tours" className="text-inver-cream/40 text-[12px] no-underline mb-2 hover:text-inver-gold-light transition-colors">{t("tours.priv.badge")}</a>
                    </div>
                    <div className="flex flex-col">
                        <h5 className="text-[10px] tracking-[3px] text-inver-gold-light mb-3 font-bold uppercase">{t("nav.exp")}</h5>
                        <a href="#transfers" className="text-inver-cream/40 text-[12px] no-underline mb-2 hover:text-inver-gold-light transition-colors">{t("nav.transfers")}</a>
                        <a href="#experiencias" className="text-inver-cream/40 text-[12px] no-underline mb-2 hover:text-inver-gold-light transition-colors">Bodegas</a>
                        <a href="#eventos" className="text-inver-cream/40 text-[12px] no-underline mb-2 hover:text-inver-gold-light transition-colors">{t("nav.events")}</a>
                        <a href="#descubrir" className="text-inver-cream/40 text-[12px] no-underline mb-2 hover:text-inver-gold-light transition-colors">{t("nav.disc")}</a>
                    </div>
                    <div className="flex flex-col">
                        <h5 className="text-[10px] tracking-[3px] text-inver-gold-light mb-3 font-bold uppercase">{t("nav.contact")}</h5>
                        <a href="tel:+59892417630" className="text-inver-cream/40 text-[12px] no-underline mb-2 hover:text-inver-gold-light transition-colors">+598 92 417 630</a>
                        <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || "59892417630"}`} className="text-inver-cream/40 text-[12px] no-underline mb-2 hover:text-inver-gold-light transition-colors">WhatsApp 24h</a>
                        <a href="mailto:reservas@inver.com.uy" className="text-inver-cream/40 text-[12px] no-underline mb-2 hover:text-inver-gold-light transition-colors">reservas@inver.com.uy</a>
                        <a href="http://www.inver.com.uy" target="_blank" rel="noreferrer" className="text-inver-cream/40 text-[12px] no-underline mb-2 hover:text-inver-gold-light transition-colors">www.inver.com.uy</a>
                    </div>
                </div>
                <div className="border-t border-inver-cream/5 pt-[18px]">
                    <p className="text-inver-cream/20 text-[11px]">© {new Date().getFullYear()} INVER Turismo · Montevideo, Uruguay · Inca 2069, CP 11800</p>
                </div>
            </div>
        </footer>
    );
}

export function FloatingWhatsApp() {
    const wpp = process.env.NEXT_PUBLIC_WHATSAPP || "59892417630";
    return (
        <a
            href={`https://wa.me/${wpp}`}
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-5 right-5 lg:bottom-7 lg:right-7 z-[800] w-[54px] h-[54px] lg:w-[60px] lg:h-[60px] bg-inver-wa rounded-full flex items-center justify-center text-[25px] lg:text-[27px] no-underline transition-transform active:scale-95 lg:hover:scale-110"
            aria-label="WhatsApp"
            style={{
                boxShadow: "0 4px 18px rgba(37,211,102,0.45)",
                WebkitTapHighlightColor: "transparent"
            }}
        >
            💬
        </a>
    );
}
