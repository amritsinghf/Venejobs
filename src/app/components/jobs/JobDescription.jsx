import { useEffect, useRef, useState } from "react";

export default function JobDescription({
    text,
    font,
    paragraphFont = "font-medium leading-relaxed",
    mobileLines = 6,
    desktopLines = 3,
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isLong, setIsLong] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const el = textRef.current;
        if (!el) return;

        if (el.scrollHeight > el.clientHeight) {
            setIsLong(true);
        }
    }, []);

    const clampClass = !isExpanded
        ? `line-clamp-${mobileLines} lg:line-clamp-${desktopLines}`
        : "";

    return (
        <div>
            <p
                ref={textRef}
                className={`text-paragraph text-sm lg:text-base ${paragraphFont} transition-all duration-200 ${clampClass}`}
            >
                {text}
            </p>

            {isLong && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`cursor-pointer text-left text-sm lg:text-base underline ${font}`}
                >
                    {isExpanded ? "Less..." : "More..."}
                </button>
            )}
        </div>
    );
}
