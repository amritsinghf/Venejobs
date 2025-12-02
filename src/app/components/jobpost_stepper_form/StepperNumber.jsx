export default function StepperNumber({ currstep }) {
  return (
    <div className="flex items-center justify-around md:max-w-[350px] w-full px-5  lg:px-0 lg:mt-30">
      {[...Array(5)].map((_, i) => (
        <div className="flex items-center w-full" key={i}>
          {/* Circle */}
          <span
            className={`
              ${
                i + 1 <= currstep
                  ? "bg-primary text-white"
                  : "bg-white text-black"
              }
              rounded-full w-[40px] h-[40px] flex items-center justify-center
              border border-gray-300 shrink-0
            `}
          >
            {i + 1}
          </span>

          {/* Dotted Line (only between circles) */}
          {i < 4 && (
            <div className="flex-1  border-t-2 border-dotted border-gray-200 "></div>
          )}
        </div>
      ))}
    </div>
  );
}
