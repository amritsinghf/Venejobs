const FormNavigation = ({ step, totalSteps, nextStep, prevStep }) => {
  return (
    <div style={{ marginTop: "1rem" }}>
      {step > 1 && (
        <button type="button" onClick={prevStep}>
          Back
        </button>
      )}
      {step < totalSteps ? (
        <button type="button" onClick={nextStep}>
          Next
        </button>
      ) : (
        <button type="submit">Submit</button>
      )}
    </div>
  );
};

export default FormNavigation;
