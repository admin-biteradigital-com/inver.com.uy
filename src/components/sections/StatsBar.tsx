"use client";

import { useI18n } from "@/lib/i18n";

export function StatsBar() {
    const { t } = useI18n();

    const stats = [
        { value: t("stat.y.v"), label: t("stat.y.l") },
        { value: t("stat.t.v"), label: t("stat.t.l") },
        { value: t("stat.l.v"), label: t("stat.l.l") },
        { value: t("stat.s.v"), label: t("stat.s.l") },
    ];

    return (
        <div className="bg-inver-gold grid grid-cols-2 sm:grid-cols-4 w-full">
            {stats.map((stat, i) => (
                <div
                    key={i}
                    className={`py-[22px] px-3.5 text-center
            ${i % 2 === 0 ? "border-r border-[#1A1209]/10" : ""} 
            ${i < 2 ? "border-b border-[#1A1209]/10 sm:border-b-0" : ""}
            sm:border-r sm:last:border-r-0
          `}
                >
                    <div className="font-heading text-[34px] font-black text-inver-dark leading-none drop-shadow-sm">
                        {stat.value}
                    </div>
                    <div className="text-[10px] text-[#1A1209]/70 tracking-[2px] mt-1 font-bold uppercase">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    );
}
