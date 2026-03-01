"use client";

import { useState } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { BookingModal } from "../ui/BookingModal";

export function Tours() {
    const { t } = useI18n();
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const tours = [
        {
            id: "mvd",
            image: "/images/tour-mvd.png",
            chips: ["🚌 Transfer", "🎙️ Guía", "🕐 ~4h"],
        },
        {
            id: "pde",
            image: "/images/tour-pde.png",
            chips: ["🚌 Transfer", "🎙️ Guía", "🕐 ~8h"],
        },
        {
            id: "col",
            image: "/images/tour-col.png",
            chips: ["🚌 Transfer", "🎙️ Guía", "🕐 ~8h"],
        },
        {
            id: "priv",
            image: "/images/tour-priv.png",
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[26px] mt-9">
                        {tours.map((tour) => (
                            <div
                                key={tour.id}
                                className="reveal bg-white rounded-[14px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex flex-col transition-all duration-400 active:scale-[0.99] lg:hover:-translate-y-2 lg:hover:shadow-[0_24px_50px_rgba(0,0,0,0.12)] group"
                            >
                                <div className="h-[230px] relative overflow-hidden flex items-end">
                                    <Image
                                        src={tour.image}
                                        alt={tour.isCustom ? "Tour Privado" : t(`tours.${tour.id}.t`)}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out lg:group-hover:scale-[1.07]"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    <div className="relative z-10 p-[20px] font-heading text-[24px] italic font-bold text-white drop-shadow-md leading-[1.15]">
                                        {tour.isCustom ? t("tours.priv.badge") : t(`tours.${tour.id}.t`)}
                                    </div>
                                </div>

                                <div className="p-[22px] flex-1 flex flex-col">
                                    <div className="text-[10px] tracking-[3px] text-inver-gold uppercase font-bold mb-1.5">
                                        {t(`tours.${tour.id}.dur`)}
                                    </div>
                                    <h3 className="font-heading text-[20px] font-bold mb-2 text-inver-dark">
                                        {tour.isCustom ? t("tours.priv.t") : t(`tours.${tour.id}.t`)}
                                    </h3>
                                    <p className="text-[14px] text-inver-muted leading-[1.6] mb-4 flex-1">
                                        {t(`tours.${tour.id}.d`)}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {tour.chips.map((chip, i) => (
                                            <span key={i} className="bg-inver-cream2 text-inver-text text-[11px] py-[4px] px-[10px] rounded-[4px] font-medium border border-inver-gold/20">
                                                {chip}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-2.5 mt-auto">
                                        {tour.isCustom ? (
                                            <>
                                                <a
                                                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || "59892417630"}?text=Hola!%20Tour%20Privado`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn btn-gold btn-md flex-1 text-center"
                                                >
                                                    {t("tours.btn.inq")}
                                                </a>
                                                <button
                                                    onClick={() => setActiveModal(tour.id)}
                                                    className="btn btn-outline-gold btn-md"
                                                >
                                                    {t("tours.btn.form")}
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => setActiveModal(tour.id)}
                                                    className="btn btn-gold btn-md flex-1"
                                                >
                                                    {t("tours.btn.book")}
                                                </button>
                                                <a
                                                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || "59892417630"}?text=Hola!%20Info%20sobre%20el%20Tour%20${tour.id.toUpperCase()}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn btn-outline-gold btn-md"
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
