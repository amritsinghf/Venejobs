export default function Active_Contracts() {
  return (
    <>
      <div className="w-full flex  border rounded-2xl justify-between mt-10">
        <div className="flex flex-col p-4">
          <h3 className="text-[#333333] font-semibold text-2xl">Harnish</h3>
          <p className="text-[#666666] text-[16px]">Can u design ui</p>
          <div className="flex flex-row items-center">
            <p className="text-[#333333] font-semibold">Started Date:</p>
            <p className="text-[#666666] text-sm">11 Dec</p>
          </div>
        </div>

        <div className="flex justify-around  w-[700px] items-center">
          <button className="text-[#666666]">Proposals (2)</button>
          <button className="text-[#666666]">Message (1)</button>

          <button className="bg-[#01237C] text-white border h-10 p-1 rounded">
            View Contract
          </button>
        </div>
      </div>
    </>
  );
}
