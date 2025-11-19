export default function Jobs() {
  return (
    <>
      <div className="w-full flex  border rounded-2xl justify-between mt-10">
        <div className="flex flex-col p-4">
          <h3 className="text-[#333333] font-semibold text-2xl">
            Landing Page Figma Designer
          </h3>
          <p className="text-[#666666] text-[16px]">Posted 4 days ago</p>
          <div className="flex flex-row items-center">
            <p className="text-[#333333] font-semibold">$33.00:</p>
            <p className="text-[#666666] text-sm">Fixed Price</p>
          </div>
        </div>

        <div className="flex justify-around  w-[700px] items-center">
          <button className="text-[#666666]">Proposals (2)</button>
          <button className="text-[#666666]">Message (1)</button>
          <button className="text-[#666666]">Shortlist (2)</button>
          <button className="bg-[#01237C] text-white border h-10 p-1 rounded">
            View details
          </button>
        </div>
      </div>
    </>
  );
}
