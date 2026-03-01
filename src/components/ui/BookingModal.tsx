"use client";

import { useI18n } from "@/lib/i18n";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface BookingForm {
    name: string;
    pax: number;
    date: string;
    hotel: string;
    phone: string;
    notes: string;
}

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    tourId: string | null;
}

export function BookingModal({ isOpen, onClose, tourId }: BookingModalProps) {
    const { t, lang } = useI18n();
    const [opening, setOpening] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingForm>();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            setOpening(false);
            reset();
        }
    }, [isOpen, reset]);

    if (!isOpen) return null;

    const tourNameEscaped = tourId ? t(`tours.${tourId}.t` as any) || t(`exp.${tourId}.t` as any) || tourId : "Reserva General";

    const onSubmit = (data: BookingForm) => {
        const wppNumber = process.env.NEXT_PUBLIC_WHATSAPP || "59892417630";

        const message = `🌟 *RESERVA - ${tourNameEscaped}*
    
👤 ${data.name}
👥 ${data.pax} persona(s)
📅 ${data.date}
🏨 ${data.hotel}
📞 ${data.phone || 'No indicado'}
📝 ${data.notes || 'Sin notas'}`;

        setOpening(true);

        setTimeout(() => {
            window.open(`https://wa.me/${wppNumber}?text=${encodeURIComponent(message)}`, "_blank");
            onClose();
        }, 900);
    };

    return (
        <div
            className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-[4px] flex items-end sm:items-center justify-center sm:p-5"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div
                className="w-full bg-white rounded-t-[20px] sm:rounded-[20px] max-h-[93svh] overflow-y-auto px-5 pb-9 pt-2.5 sm:pt-5 sm:max-w-[520px] relative animate-[slideUp_0.35s_cubic-bezier(0.34,1.56,0.64,1)] sm:animate-[zoomIn_0.3s_ease]"
            >
                <div className="w-[36px] h-1 bg-[#ddd] rounded-sm mx-auto mb-4 sm:hidden" />

                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 bg-[#f0ebe0] border-none w-[30px] h-[30px] rounded-full text-[15px] flex items-center justify-center text-inver-text"
                >
                    ✕
                </button>

                <h2 className="font-heading text-[22px] mb-1 text-inver-text">{t("modal.title")}</h2>
                <p className="text-[#999] text-[13px] mb-[22px] leading-relaxed">
                    {t("modal.sub")}
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-[14px]">
                    <div>
                        <label className="block text-[12px] font-semibold mb-[5px] tracking-[0.3px] text-inver-text">
                            {t("modal.n")}
                        </label>
                        <input
                            {...register("name", { required: true })}
                            className="w-full p-[13px] px-[14px] border-[1.5px] border-[#E0D5C5] rounded-lg font-sans text-[15px] bg-inver-cream2 text-inver-text outline-none focus:border-inver-gold"
                            placeholder="Ej: John Doe"
                        />
                        {errors.name && <span className="text-red-500 text-xs mt-1">{t("modal.err")}</span>}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-[12px] font-semibold mb-[5px] tracking-[0.3px] text-inver-text">
                                {t("modal.p")}
                            </label>
                            <input
                                type="number"
                                min="1"
                                {...register("pax", { required: true, min: 1 })}
                                className="w-full p-[13px] px-[14px] border-[1.5px] border-[#E0D5C5] rounded-lg font-sans text-[15px] bg-inver-cream2 text-inver-text outline-none focus:border-inver-gold"
                                placeholder="1"
                            />
                        </div>
                        <div>
                            <label className="block text-[12px] font-semibold mb-[5px] tracking-[0.3px] text-inver-text">
                                {t("modal.d")}
                            </label>
                            <input
                                type="date"
                                {...register("date", { required: true })}
                                className="w-full p-[13px] px-[14px] border-[1.5px] border-[#E0D5C5] rounded-lg font-sans text-[15px] bg-inver-cream2 text-inver-text outline-none focus:border-inver-gold min-h-[50px] appearance-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-[12px] font-semibold mb-[5px] tracking-[0.3px] text-inver-text">
                            {t("modal.h")}
                        </label>
                        <input
                            {...register("hotel", { required: true })}
                            className="w-full p-[13px] px-[14px] border-[1.5px] border-[#E0D5C5] rounded-lg font-sans text-[15px] bg-inver-cream2 text-inver-text outline-none focus:border-inver-gold"
                            placeholder="Radisson Victoria Plaza"
                        />
                    </div>

                    <div>
                        <label className="block text-[12px] font-semibold mb-[5px] tracking-[0.3px] text-inver-text">
                            {t("modal.ph")}
                        </label>
                        <input
                            type="tel"
                            {...register("phone")}
                            className="w-full p-[13px] px-[14px] border-[1.5px] border-[#E0D5C5] rounded-lg font-sans text-[15px] bg-inver-cream2 text-inver-text outline-none focus:border-inver-gold"
                            placeholder="+598 92 000 000"
                        />
                    </div>

                    <div>
                        <label className="block text-[12px] font-semibold mb-[5px] tracking-[0.3px] text-inver-text">
                            {t("modal.not")}
                        </label>
                        <textarea
                            {...register("notes")}
                            className="w-full p-[13px] px-[14px] border-[1.5px] border-[#E0D5C5] rounded-lg font-sans text-[15px] bg-inver-cream2 text-inver-text outline-none focus:border-inver-gold min-h-[72px] resize-y"
                            placeholder="..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={opening}
                        className="btn btn-gold w-full mt-[14px] py-4"
                    >
                        <span>📱</span> {t("modal.btn")}
                    </button>

                    {opening && (
                        <div className="bg-[#d4edda] text-[#155724] p-3 rounded-lg text-center text-[14px] mt-2.5">
                            ✅ {t("modal.loading")}
                        </div>
                    )}
                </form>
            </div>

            <style jsx global>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
        </div>
    );
}
