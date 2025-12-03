import SvgIcon from "../SvgIcon";

export default function Pagination({ page, totalPage, onChange }) {
    return (
        <div className="flex justify-end py-6 px-6">
            <div className="flex justify-center gap-3 items-center">

                {/* Prev Button */}
                <button
                    disabled={page === 1}
                    onClick={() => onChange(page - 1)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full border 
            ${page === 1 ? "opacity-40" : "bg-white text-paragraph"}`}
                >
                    <SvgIcon name="Control_prev" />
                </button>

                {/* Page Numbers */}
                {[...Array(totalPage)].map((_, i) => {
                    const active = page === i + 1;
                    return (
                        <button
                            key={i}
                            onClick={() => onChange(i + 1)}
                            className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 
                font-semibold transition
                ${active ? "bg-primary text-white" : "bg-white text-paragraph"}`}
                        >
                            {i + 1}
                        </button>
                    );
                })}

                {/* Next Button */}
                <button
                    disabled={page === totalPage}
                    onClick={() => onChange(page + 1)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full border 
            ${page === totalPage ? "opacity-40" : "bg-white text-paragraph"}`}
                >
                    <SvgIcon name="Control_next" />
                </button>
            </div>
        </div>
    );
}
