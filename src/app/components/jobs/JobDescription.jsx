import { useEffect, useRef, useState } from "react";

export default function JobDescription({ text, font }) {
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

    return (
        <div>
            <p
                ref={textRef}
                className={`text-sm lg:text-base text-paragraph transition-all duration-200 ${!isExpanded ? "line-clamp-6 lg:line-clamp-3" : ""
                    }`}
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
