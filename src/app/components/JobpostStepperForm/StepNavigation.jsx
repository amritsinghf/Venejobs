"use client";

import Button from "../button/Button";
import SvgIcon from "../Utility/SvgIcon";
import Loader from "../common/Loader";

const StepNavigation = ({
  onNext,
  onBack,
  onReviewBack,
  isFirstStep = false,
  isLastStep = false,
  showReviewBack = false,
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
            className="bg-white text-gray-800 flex items-center gap-2"
            style={{
              boxShadow: "2px 2px 50px 5px rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <SvgIcon name="PrevButton" />
            Back
          </Button>
        )}

        {/* Back to Review (edit mode) */}
        {showReviewBack && onReviewBack && !isLastStep && (
          <Button
            type="button"
            onClick={onReviewBack}
            className="bg-gray-100 text-blue-900 flex items-center gap-2"
          >
            Review
          </Button>
        )}
      </div>

      {/* RIGHT SIDE */}
      {!isLastStep ? (
        <Button
          type="button"
          onClick={onNext}
          disabled={loading}
          className={`bg-primary text-white flex items-center gap-2 justify-center ${loading ? "opacity-70 cursor-not-allowed" : ""
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
          className={`bg-primary text-white flex items-center gap-2 justify-center ${loading ? "opacity-70 cursor-not-allowed" : ""
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