import SvgIcon from "./SvgIcon";

export default function PaginationFreelance({selectPage,totalPages,page}){
    return (
        <div className="flex justify-start px-2 md:px-4 gap-5 items-center">
          {/* Previous Arrow */}
          <button
            disabled={page === 1}
            onClick={() => selectPage(page - 1)}
            className={`cursor-pointer transition-transform duration-200
                ${page === 1 ? "opacity-40" : "hover:-translate-x-1"}`}
          >
            <SvgIcon name="Control_prev" />
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, i) => {
            const active = page === i + 1;

            return (
              <button
                key={i}
                onClick={() => selectPage(i + 1)}
                className={`min-w-8 min-h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full cursor-pointer 
                    border border-gray-300 leading-none font-semibold
                    transition-colors duration-200
                    ${
                      active
                        ? "bg-secondary text-white"
                        : "bg-white text-paragraph hover:bg-gray-100"
                    }`}
              >
                {i + 1}
              </button>
            );
          })}

          {/* Next Arrow */}
          <button
            disabled={page === totalPages}
            onClick={() => selectPage(page + 1)}
            className={`cursor-pointer transition-transform duration-200 md:w-10
                ${page === totalPages ? "opacity-40" : "hover:translate-x-1"}`}
          >
            <SvgIcon name="Control_next" />
          </button>
        </div>
    )
}