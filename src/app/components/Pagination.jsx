import SvgIcon from "./SvgIcon";

export default function Pagination({ page, totalPages, onPageChange }) {
    const selectPage = (p) => {
        if (p >= 1 && p <= totalPages && p !== page) onPageChange(p);
    };

    return (
        <div className="flex justify-end py-6 px-6">
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-3 md:gap-5 items-center">

                <button
                    disabled={page === 1}
                    onClick={() => selectPage(page - 1)}
                    className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border cursor-pointer
                    ${page === 1 ? "opacity-40" : "bg-white text-paragraph"}`}
                >
                    <SvgIcon name="Control_prev" />
                </button>

                {[...Array(totalPages)].map((_, idx) => {
                    const active = page === idx + 1;
                    return (
                        <button
                            key={idx}
                            onClick={() => selectPage(idx + 1)}
                            className={`w-8 h-8 md:w-10 md:h-10 shrink-0 flex items-center justify-center  text-sm lg:text-base
    rounded-full border font-semibold leading-none
    ${active ? "bg-primary text-white" : "bg-white text-paragraph"}`}
                        >
                            {idx + 1}
                        </button>

                    );
                })}

                <button
                    disabled={page === totalPages}
                    onClick={() => selectPage(page + 1)}
                    className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border cursor-pointer
                    ${page === totalPages ? "opacity-40" : "bg-white text-paragraph"}`}
                >
                    <SvgIcon name="Control_next" />
                </button>
            </div>
        </div>
    );
}
