import SvgIcon from "../SvgIcon";

export default function Pagination({ page, totalPages, onPageChange }) {
    const selectPage = (p) => {
        if (p >= 1 && p <= totalPages && p !== page) onPageChange(p);
    };

    return (
        <div className="flex justify-end py-6 px-6">
            <div className="flex justify-center gap-3 items-center">

                {/* Prev */}
                <button
                    disabled={page === 1}
                    onClick={() => selectPage(page - 1)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full border 
            ${page === 1 ? "opacity-40" : "bg-white text-paragraph"}`}
                >
                    <SvgIcon name="Control_prev" />
                </button>

                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, idx) => {
                    const active = page === idx + 1;
                    return (
                        <button
                            key={idx}
                            onClick={() => selectPage(idx + 1)}
                            className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 font-semibold
                ${active ? "bg-primary text-white" : "bg-white text-paragraph"}`}
                        >
                            {idx + 1}
                        </button>
                    );
                })}

                {/* Next */}
                <button
                    disabled={page === totalPages}
                    onClick={() => selectPage(page + 1)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full border 
            ${page === totalPages ? "opacity-40" : "bg-white text-paragraph"}`}
                >
                    <SvgIcon name="Control_next" />
                </button>
            </div>
        </div>
    );
}
