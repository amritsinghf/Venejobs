import React from "react";
import Button from "../button/Button";
import SvgIcon from "../SvgIcon";

const LeftPanel = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <div>
        <p>1 / 3</p>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-heading font-semibold text-2xl lg:text-[44px]">
          Add a Billing Method to Start Hiring Top Talent
        </h2>
        <p className="text-lg text-paragraph">
          Adding a billing method has increased client hiring speed by up to 3X
          faster. There’s no cost until you hire.
        </p>
      </div>
      <div className="flex justify-end gap-10">
        <button className="text-paragraph font-medium">Skip</button>
        <Button className="bg-primary text-white gap-3">
          Continue <SvgIcon name="NextArrow" />
        </Button>
      </div>
    </div>
  );
};

export default LeftPanel;
