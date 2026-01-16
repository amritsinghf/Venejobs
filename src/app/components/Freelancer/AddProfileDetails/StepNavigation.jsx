"use client";

import Button from "@/app/components/button/Button";
import Loader from "@/app/components/common/Loader";
import SvgIcon from "@/app/components/Utility/SvgIcon";

const StepNavigation = ({
  onNext,
  onBack,
  isFirstStep = false,
  isLastStep = false,
  loading = false,
  nextLabel = "Next",
  submitLabel = "Submit",
}) => {
  return (
    <div className="flex justify-between items-center w-full mt-6 gap-4">
      {/* LEFT SIDE */}
      <div className="flex gap-3">
        {/* Back */}
        {!isFirstStep && onBack && (
          <Button
            type="button"
            onClick={onBack}
            className="bg-white text-paragraph flex items-center gap-2 shadow"
            style={{
              boxShadow: "2px 2px 50px 5px rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <SvgIcon name="PrevButton" />
            Back
          </Button>
        )}
      </div>

      {/* RIGHT SIDE */}
      {!isLastStep ? (
        <Button
          type="button"
          onClick={onNext}
          disabled={loading}
          className={`bg-secondary text-white flex items-center gap-2 justify-center ${loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
        >
          {loading ? (
            <Loader size={18} border={3} color="white" />
          ) : (
            <>
              {nextLabel}
              <SvgIcon name="NextArrow" />
            </>
          )}
        </Button>
      ) : (
        <Button
          type="submit"
          disabled={loading}
          className={`bg-secondary text-white flex items-center gap-2 justify-center ${loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
        >
          {loading ? (
            <Loader size={18} border={3} color="white" />
          ) : (
            submitLabel
          )}
        </Button>
      )}
    </div>
  );
};

export default StepNavigation;