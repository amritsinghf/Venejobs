export default function JobTabs({ showData, setshowData }) {
    return (
        <>
            <div className="flex gap-15 justify-start">
                <button onClick={() => setshowData(true)}>
                    <p
                        className={`
                            font-semibold text-sm lg:text-base tracking-wide cursor-pointer relative pb-2
                            ${showData ? "text-blue-900" : "text-paragraph"}
                        `}
                    >
                        All job posts
                    </p>
                </button>

                <button onClick={() => setshowData(false)}>
                    <p
                        className={`
                            font-semibold text-sm lg:text-base tracking-wide cursor-pointer relative pb-2
                            ${!showData ? "text-blue-900" : "text-paragraph"}
                        `}
                    >
                        Your Active Contracts
                    </p>
                </button>
            </div>

            {/* HR + underline wrapper */}
            <div className="relative mt-1">
                <hr className="border-gray-300" />

                {/* underline */}
                <div
                    className={`
                        absolute bottom-0 h-0.5 bg-blue-900 transition-all duration-300
                        ${showData
                            ? "left-0 w-[110px]"   
                            : "left-[150px] w-[200px]"
                        }
                    `}
                ></div>
            </div>
        </>
    );
}
