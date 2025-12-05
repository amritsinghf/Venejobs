import Image from "next/image";
import Button from "../button/Button";

export default function ContractCard() {
  return (
    <div className="border-b border-[rgba(68,68,68,0.08)] py-2 px-2 md:p-6 lg:p-8">
      <div className="w-full flex flex-col lg:flex-row items-start lg:items-center rounded justify-between gap-6">
        {/* Left Section */}
        <div className="flex items-start gap-6 w-full lg:w-auto">
          <Image
            src="/freelancer.jpg"
            alt="Freelancer image"
            width={60}
            height={60}
            className="rounded-full w-12 h-12 sm:w-16 sm:h-16"
          />

          <div className="flex flex-col gap-1.5 w-full ">
            <div className="flex flex-row justify-between  sm:flex-row sm:items-center gap-2 lg:gap-4">
              <h3 className="text-xl lg:text-2xl text-heading font-semibold tracking-normal">
                Jon Doe
              </h3>
              <p className="bg-secondary text-white rounded-3xl border font-medium px-3 py-1 md:px-4 md:py-1 text-xs lg:text-xs w-fit">
                Active Contract
              </p>
            </div>

            <p className="text-paragraph text-sm lg:text-base font-medium">
              Can u design ui
            </p>

            <div className="flex flex-row items-center">
              <p className="text-heading text-sm lg:text-base font-medium">
                Started Date:&nbsp;
              </p>
              <p className="text-paragraph text-sm lg:text-base font-medium">
                11-01-0001
              </p>
            </div>
          </div>
        </div>

        {/* Amounts */}
        <div className="flex flex-col sm:flex-row lg:flex-row items-start sm:items-center gap-5 lg:gap-30 w-full lg:w-auto">
          <div className="flex flex-col gap-2">
            <h3 className="text-heading font-semibold text-sm md:text-lg">
              Contract Amount :
            </h3>
            <p className="text-paragraph font-medium text-base">$1000.00</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-heading font-semibold text-sm md:text-lg">
              Paid Amount :
            </h3>
            <p className="text-paragraph font-medium text-base">$500.00</p>
          </div>
        </div>

        {/* View Button */}
        <Button className="bg-primary text-white px-4 rounded  sm:w-auto">
          View contract
        </Button>
      </div>
    </div>
  );
}
