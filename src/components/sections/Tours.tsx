"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { BookingModal } from "../ui/BookingModal";

export function Tours() {
    const { t } = useI18n();
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const tours = [
        {
            id: "mvd",
            icon: "🏛️",
            bgClass: "bg-gradient-to-br from-[#1A3A0A] to-[#2D5016]",
            chips: ["🚌 Transfer", "🎙️ Guía", "🕐 ~4h"],
        },
        {
            id: "pde",
            icon: "🌊",
            bgClass: "bg-gradient-to-br from-[#0A1F3A] to-[#1A3A6A]",
            chips: ["🚌 Transfer", "🎙️ Guía", "🕐 ~8h"],
        },
        {
            id: "col",
            icon: "⚓",
            bgClass: "bg-gradient-to-br from-[#3A1A0A] to-[#6A3010]",
            chips: ["🚌 Transfer", "🎙️ Guía", "🕐 ~8h"],
        },
        {
            id: "priv",
            icon: "⭐",
            bgClass: "bg-gradient-to-br from-[#C8943A] to-[#E8B86D]",
            chips: ["✨ 100% privado", "📍 Tu destino"],
            isCustom: true,
        },
    ];

    return (
        <>
            <section id="tours" className="section bg-inver-cream2">
                <div className="container">
                    <p className="tag">{t("tours.tag")}</p>
                    <h2 className="title">{t("tours.title")}</h2>
                    <p className="lead border-b pb-4 border-transparent">{t("tours.lead")}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] lg:gap-[22px] mt-9">
                        {tours.map((tour) => (
                            <div
                                key={tour.id}
                                className="reveal bg-white rounded-[14px] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.07)] flex flex-col transition-all duration-300 active:scale-[0.99] lg:hover:-translate-y-2 lg:hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] group"
                            >
                                <div className="h-[188px] relative overflow-hidden flex items-end">
                                    <div className={`absolute inset-0 transition-transform duration-500 lg:group-hover:scale-105 ${tour.bgClass}`} />
                                    <div className="absolute top-3.5 right-3.5 text-[34px] opacity-40 leading-none">
                                        {tour.icon}
                                    </div>
                                    <div className="relative z-10 p-4 font-heading text-[22px] italic font-bold text-white drop-shadow-md leading-[1.15]">
                                        {tour.isCustom ? t("tours.priv.badge") : t(`tours.${tour.id}.t`)}
                                    </div>
                                </div>

                                <div className="p-[18px] flex-1 flex flex-col">
                                    <div className="text-[10px] tracking-[3px] text-inver-gold uppercase font-bold mb-1.5">
                                        {t(`tours.${tour.id}.dur`)}
                                    </div>
                                    <h3 className="font-heading text-[18px] font-bold mb-2">
                                        {tour.isCustom ? t("tours.priv.t") : t(`tours.${tour.id}.t`)}
                                    </h3>
                                    <p className="text-[13px] text-inver-muted leading-[1.6] mb-3.5 flex-1">
                                        {t(`tours.${tour.id}.d`)}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mb-3.5">
                                        {tour.chips.map((chip, i) => (
                                            <span key={i} className="bg-inver-cream text-inver-text text-[11px] py-[3px] px-[9px] rounded-full font-medium">
                                                {chip}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-2 mt-auto">
                                        {tour.isCustom ? (
                                            <>
                                                <a
                                                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || "59892417630"}?text=Hola!%20Tour%20Privado`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn btn-gold btn-sm flex-1 text-center"
                                                >
                                                    {t("tours.btn.inq")}
                                                </a>
                                                <button
                                                    onClick={() => setActiveModal(tour.id)}
                                                    className="btn btn-outline-gold btn-sm"
                                                >
                                                    {t("tours.btn.form")}
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => setActiveModal(tour.id)}
                                                    className="btn btn-gold btn-sm"
                                                >
                                                    {t("tours.btn.book")}
                                                </button>
                                                <a
                                                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || "59892417630"}?text=Hola!%20Info%20sobre%20el%20Tour%20${tour.id.toUpperCase()}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn btn-outline-gold btn-sm"
                                                >
                                                    WhatsApp
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <BookingModal
                isOpen={!!activeModal}
                onClose={() => setActiveModal(null)}
                tourId={activeModal}
            />
        </>
    );
}
