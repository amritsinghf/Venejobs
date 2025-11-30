"use client";

import { useState, useEffect, useRef } from "react";
import Button from "../button/Button";
import SvgIcon from "../SvgIcon";
import CategoryCard from "./CategoryCard";

export default function CategorySlider({ items }) {
    const [index, setIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);
    const [cardWidth, setCardWidth] = useState(240);

    const gap = 20;

    // TOUCH STATE
    const startX = useRef(0);
    const endX = useRef(0);

    // 📱 RESPONSIVE LOGIC
    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 480) {
                setVisibleCount(1);
                setCardWidth(260);
            } else if (window.innerWidth < 768) {
                setVisibleCount(2);
                setCardWidth(260);
            } else if (window.innerWidth < 1024) {
                setVisibleCount(3);
                setCardWidth(280);
            } else {
                setVisibleCount(4);
                setCardWidth(300);
            }
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const maxIndex = Math.max(0, items.length - visibleCount);

    const next = () => setIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
    const prev = () => setIndex((prev) => (prev > 0 ? prev - 1 : prev));

    // 👉 TOUCH HANDLERS (MOBILE SWIPE)
    const onTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
    };

    const onTouchMove = (e) => {
        endX.current = e.touches[0].clientX;
    };

    const onTouchEnd = () => {
        if (!endX.current) return;

        const diff = startX.current - endX.current;

        if (diff > 50) next();     // swipe left
        if (diff < -50) prev();    // swipe right

        startX.current = 0;
        endX.current = 0;
    };

    return (
        <div className="relative w-full overflow-hidden z-10">

            {/* SLIDER ROW */}
            <div
                className="flex transition-transform duration-300 relative z-20"
                style={{
                    transform: `translateX(-${index * (cardWidth + gap)}px)`,
                    gap: `${gap}px`,
                }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {items.map((item, idx) => (
                    <div key={idx} style={{ width: cardWidth }}>
                        <CategoryCard src={item.src} label={item.label} />
                    </div>
                ))}
            </div>

            {/* DESKTOP PREV BUTTON */}
            <Button
                onClick={prev}
                disabled={index === 0}
                className="
                    hidden lg:flex items-center justify-center
                    absolute top-1/2 -translate-y-1/2
                    left-[-22px]
                    w-11 h-11 rounded-full bg-white
                    shadow-[0_4px_20px_rgba(0,0,0,0.15)]
                    border border-[#E5E7EB]
                    cursor-pointer
                    z-50
                "
            >
                <SvgIcon name='Control_prev' />
            </Button>

            {/* DESKTOP NEXT BUTTON */}
            <Button
                onClick={next}
                disabled={index === maxIndex}
                className="
                    hidden lg:flex items-center justify-center
                    absolute top-1/2 -translate-y-1/2
                    right-[-22px]
                    w-11 h-11 rounded-full bg-white
                    shadow-[0_4px_20px_rgba(0,0,0,0.15)]
                    border border-[#E5E7EB]
                    cursor-pointer
                    z-50
                "
            >
                <SvgIcon name='Control_next' />
            </Button>

            {/* MOBILE BUTTONS */}
            <div className="flex justify-center gap-4 mt-5 lg:hidden z-30">
                <Button
                    onClick={prev}
                    disabled={index === 0}
                    className="w-9 h-9 bg-white rounded-full shadow-md border"
                >
                    <SvgIcon name='Control_prev' />
                </Button>

                <Button
                    onClick={next}
                    disabled={index === maxIndex}
                    className="w-9 h-9 bg-white rounded-full shadow-md border"
                >
                    <SvgIcon name='Control_next' />
                </Button>
            </div>
        </div>
    );
}
