"use client";

import { useI18n, type Lang } from "@/lib/i18n";
import { useState } from "react";
import { Phone, MapPin, Mail, Globe, MessageCircle, Send, Facebook, Youtube, ShieldCheck } from "lucide-react";

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
                <p className="tag border-inver-cream/10 text-inver-cream/40">{t("con.tag")}</p>
                <h2 className="title text-inver-cream">{t("con.title")}</h2>
                <p className="lead text-inver-cream/55">{t("con.lead")}</p>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-[32px] md:gap-[50px] mt-9">
                    <div className="flex flex-col gap-[20px]">
                        {[
                            { Icon: Phone, t: t("con.p.t"), d: "+598 92 417 630\n+598 91 274 848 (24h)" },
                            { Icon: MapPin, t: t("con.d.t"), d: "Inca 2069 | CP 11800\nMontevideo, Uruguay" },
                            { Icon: Mail, t: "Email", d: "reservas@inver.com.uy", l: "mailto:reservas@inver.com.uy" },
                            { Icon: Globe, t: "Web", d: "www.inver.com.uy", l: "http://www.inver.com.uy" },
                            { Icon: MessageCircle, t: "WhatsApp", d: "+598 92 417 630", l: `https://wa.me/${wpp}` }
                        ].map((c, i) => (
                            <div key={i} className="flex gap-[16px] items-start group">
                                <div className="w-[46px] h-[46px] rounded-xl bg-inver-gold/5 flex items-center justify-center text-inver-gold shrink-0 border border-inver-gold/20 group-hover:bg-inver-gold group-hover:text-inver-dark group-hover:border-inver-gold transition-colors duration-300 shadow-md">
                                    <c.Icon size={20} strokeWidth={1.5} />
                                </div>
                                <div className="pt-0.5">
                                    <h4 className="text-inver-cream text-[14px] font-semibold mb-1 tracking-wide">{c.t}</h4>
                                    {c.l ? (
                                        <a href={c.l} target="_blank" rel="noreferrer" className="text-inver-cream/60 text-[13.5px] hover:text-inver-gold-light transition-colors whitespace-pre-line block leading-[1.6]">
                                            {c.d}
                                        </a>
                                    ) : (
                                        <p className="text-inver-cream/60 text-[13.5px] leading-[1.6] whitespace-pre-line">
                                            {c.d}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="reveal bg-gradient-to-b from-inver-gold/10 to-transparent border border-inver-gold/20 rounded-[16px] p-[32px] px-6 sm:px-8 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-inver-gold/5 rounded-full blur-[80px] -mr-[100px] -mt-[100px] pointer-events-none" />
                        <h3 className="font-heading text-[22px] text-inver-cream mb-6 font-bold relative z-10">{t("con.form.t")}</h3>

                        <div className="space-y-[16px] relative z-10">
                            <div>
                                <label className="block text-inver-cream/70 text-[12px] font-semibold mb-[6px] tracking-[0.5px] uppercase">{t("con.form.n")}</label>
                                <input
                                    type="text"
                                    value={formData.n}
                                    onChange={(e) => setFormData({ ...formData, n: e.target.value })}
                                    className="w-full p-[14px] px-[16px] border border-inver-gold/20 rounded-[10px] bg-black/20 text-inver-cream outline-none focus:border-inver-gold focus:bg-black/40 transition-colors text-[15px] placeholder:text-inver-cream/20 font-sans shadow-inner"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-inver-cream/70 text-[12px] font-semibold mb-[6px] tracking-[0.5px] uppercase">{t("con.form.e")}</label>
                                <input
                                    type="email"
                                    value={formData.e}
                                    onChange={(e) => setFormData({ ...formData, e: e.target.value })}
                                    className="w-full p-[14px] px-[16px] border border-inver-gold/20 rounded-[10px] bg-black/20 text-inver-cream outline-none focus:border-inver-gold focus:bg-black/40 transition-colors text-[15px] placeholder:text-inver-cream/20 font-sans shadow-inner"
                                    placeholder="tu@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-inver-cream/70 text-[12px] font-semibold mb-[6px] tracking-[0.5px] uppercase">{t("con.form.s")}</label>
                                <select
                                    value={formData.s}
                                    onChange={(e) => setFormData({ ...formData, s: e.target.value })}
                                    className="w-full p-[14px] px-[16px] border border-inver-gold/20 rounded-[10px] bg-black/20 text-inver-cream outline-none focus:border-inver-gold focus:bg-black/40 transition-colors text-[15px] font-sans appearance-none shadow-inner"
                                >
                                    {t("con.form.opions").split(",").map(opt => (
                                        <option key={opt} value={opt} className="bg-inver-dark text-inver-cream">{opt}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-inver-cream/70 text-[12px] font-semibold mb-[6px] tracking-[0.5px] uppercase">{t("con.form.m")}</label>
                                <textarea
                                    value={formData.m}
                                    onChange={(e) => setFormData({ ...formData, m: e.target.value })}
                                    className="w-full p-[14px] px-[16px] border border-inver-gold/20 rounded-[10px] bg-black/20 text-inver-cream outline-none focus:border-inver-gold focus:bg-black/40 transition-colors text-[15px] min-h-[80px] resize-y placeholder:text-inver-cream/20 font-sans shadow-inner"
                                    placeholder="..."
                                />
                            </div>
                            <button onClick={onSubmit} className="btn btn-gold btn-full btn-lg mt-[18px] !py-[18px] flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(200,148,58,0.2)]">
                                <Send size={18} /> {t("con.form.btn")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    const { lang, setLang, t } = useI18n();

    return (
        <footer className="bg-[#0A0704] pt-14 px-[18px] pb-6 border-t border-inver-gold/10 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-inver-gold/20 to-transparent" />
            <div className="container relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-11 mb-10">
                    <div className="col-span-2 md:col-span-1 lg:col-span-2 pr-0 lg:pr-10">
                        <div className="font-heading text-[28px] font-black text-inver-gold-light leading-none tracking-tight">INVER</div>
                        <div className="text-[10px] tracking-[3px] text-inver-cream/40 mb-3 mt-1.5 font-bold uppercase">Turismo · Uruguay · 15 Años</div>
                        <p className="text-[13px] text-inver-cream/50 leading-[1.75] mb-5">
                            {t("hero.sub")}
                        </p>
                        <div className="flex gap-3">
                            <a href="https://www.facebook.com/nelson.inver" target="_blank" rel="noreferrer" className="w-[36px] h-[36px] rounded-full bg-inver-cream/5 flex items-center justify-center text-inver-cream/60 hover:text-inver-gold hover:bg-inver-gold/10 transition-colors">
                                <Facebook size={18} strokeWidth={1.5} />
                            </a>
                            <a href="https://www.youtube.com/watch?v=klyf_jU1140" target="_blank" rel="noreferrer" className="w-[36px] h-[36px] rounded-full bg-inver-cream/5 flex items-center justify-center text-inver-cream/60 hover:text-inver-gold hover:bg-inver-gold/10 transition-colors">
                                <Youtube size={18} strokeWidth={1.5} />
                            </a>
                            <a href="https://www.inver.com.uy/access/access.aspx" target="_blank" rel="noreferrer" className="h-[36px] px-4 rounded-full bg-inver-cream/5 flex items-center justify-center text-inver-cream/60 text-[12px] font-semibold hover:text-inver-gold hover:bg-inver-gold/10 transition-colors gap-1.5 border border-transparent hover:border-inver-gold/30">
                                <ShieldCheck size={16} strokeWidth={1.5} /> B2B Access
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h5 className="text-[11px] tracking-[3px] text-inver-gold-light mb-4 font-bold uppercase">Tours</h5>
                        {["Montevideo", "Punta del Este", "Colonia"].map(l => (
                            <a key={l} href="#tours" className="text-inver-cream/40 text-[13px] no-underline mb-2.5 hover:text-inver-gold transition-colors">{l}</a>
                        ))}
                        <a href="#tours" className="text-inver-gold/60 text-[13px] font-medium no-underline mb-2 hover:text-inver-gold transition-colors">{t("tours.priv.badge")}</a>
                    </div>
                    <div className="flex flex-col">
                        <h5 className="text-[11px] tracking-[3px] text-inver-gold-light mb-4 font-bold uppercase">{t("nav.exp")}</h5>
                        <a href="#transfers" className="text-inver-cream/40 text-[13px] no-underline mb-2.5 hover:text-inver-gold transition-colors">{t("nav.transfers")}</a>
                        <a href="#experiencias" className="text-inver-cream/40 text-[13px] no-underline mb-2.5 hover:text-inver-gold transition-colors">Bodegas</a>
                        <a href="#eventos" className="text-inver-cream/40 text-[13px] no-underline mb-2.5 hover:text-inver-gold transition-colors">{t("nav.events")}</a>
                        <a href="#descubrir" className="text-inver-cream/40 text-[13px] no-underline mb-2.5 hover:text-inver-gold transition-colors">{t("nav.disc")}</a>
                    </div>
                    <div className="flex flex-col">
                        <h5 className="text-[11px] tracking-[3px] text-inver-gold-light mb-4 font-bold uppercase">{t("nav.contact")}</h5>
                        <a href="tel:+59892417630" className="text-inver-cream/40 text-[13px] no-underline mb-2.5 hover:text-inver-gold transition-colors">+598 92 417 630</a>
                        <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || "59892417630"}`} className="text-inver-cream/40 text-[13px] no-underline mb-2.5 hover:text-inver-gold transition-colors">WhatsApp 24h</a>
                        <a href="mailto:reservas@inver.com.uy" className="text-inver-cream/40 text-[13px] no-underline mb-2.5 hover:text-inver-gold transition-colors">reservas@inver.com.uy</a>
                        <a href="http://www.inver.com.uy" target="_blank" rel="noreferrer" className="text-inver-cream/40 text-[13px] no-underline mb-2.5 hover:text-inver-gold transition-colors">www.inver.com.uy</a>
                    </div>
                </div>
                <div className="border-t border-inver-cream/10 pt-5 flex flex-col md:flex-row items-center justify-between gap-5 relative">
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <p className="text-inver-cream/30 text-[11.5px]">© {new Date().getFullYear()} INVER Turismo. Todos los derechos reservados.</p>
                        <p className="text-inver-cream/20 text-[11px] font-mono">Inca 2069, 11800 MVD, UY</p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <a href="#" className="text-inver-cream/25 hover:text-inver-cream/50 transition-colors text-[11px] uppercase tracking-wider">Legal Terms</a>
                        <a href="#" className="text-inver-cream/25 hover:text-inver-cream/50 transition-colors text-[11px] uppercase tracking-wider">Privacy Policy</a>

                        <div className="h-3 w-px bg-inver-cream/10 hidden md:block mx-1" />

                        {/* Emergency Language Selector */}
                        <div className="flex gap-1.5">
                            {(["es", "en", "pt"] as Lang[]).map((l) => (
                                <button
                                    key={l}
                                    onClick={() => setLang(l)}
                                    className={`text-[9px] uppercase tracking-[1px] font-bold px-1.5 py-0.5 rounded transition-all ${lang === l ? "text-inver-gold bg-inver-gold/10" : "text-inver-cream/20 hover:text-inver-cream/50"
                                        }`}
                                    title={`Forzar idioma a ${l.toUpperCase()}`}
                                >
                                    {l}
                                </button>
                            ))}
                        </div>
                    </div>
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
            className="fixed bottom-5 right-5 lg:bottom-8 lg:right-8 z-[800] w-[56px] h-[56px] lg:w-[64px] lg:h-[64px] bg-[#25D366] rounded-full flex items-center justify-center text-white transition-all active:scale-95 lg:hover:scale-110 lg:hover:-translate-y-1"
            aria-label="WhatsApp"
            style={{
                boxShadow: "0 8px 32px rgba(37,211,102,0.45)",
                WebkitTapHighlightColor: "transparent"
            }}
        >
            <MessageCircle size={32} strokeWidth={1.5} />
        </a>
    );
}
