import { useFormContext } from "react-hook-form";

import TitleHeader from "./TitleHeader";
import TitleInputSection from "./TitleInputSection";
import StepperNumber from "../StepperNumber";
import { JobFormStep } from "../JobFormStep";

const TitlePage = ({ nextStep, setStep, fromReview }) => {
    const { trigger } = useFormContext();

    const validateFields = async (callback) => {
        const valid = await trigger(["title"]);

        if (valid) {
            callback();
        }
    };

    return (
        <div className="flex flex-col gap-6 lg:gap-10">
            <StepperNumber currstep={JobFormStep.title} />

            <div className="flex gap-6 lg:gap-25 flex-col lg:flex-row">
                <TitleHeader />
                <TitleInputSection
                    onNext={() => validateFields(nextStep)}
                    isFirstStep
                    fromReview={fromReview}
                    onReviewBack={() =>
                        validateFields(() => setStep(JobFormStep.review))
                    }
                />
            </div>
        </div>
    );
};

export default TitlePage;
