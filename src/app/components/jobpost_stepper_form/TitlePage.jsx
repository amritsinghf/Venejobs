import { useFormContext } from "react-hook-form";

const TitlePage = ({ nextStep, currstep }) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

  const handleNext = async () => {
    const valid = await trigger(["title"]);
    if (valid) nextStep();
  };

  return (
    <div className="w-full  max-w-[1420px]  mb-20 mt-30 mx-auto ">
      <div className="flex  justify-evenly max-w-[250px]">
        {[...Array(5)].map((_, i) => (
          <div className="flex   text-center" key={i}>
            <span
              className={`${
                i + 1 <= currstep
                  ? "bg-blue-900 text-white"
                  : "bg-white text-black"
              } rounded-full w-[35px] h-[35px] flex items-center justify-center border border-gray-300`}
            >
              {i + 1}
            </span>
          </div>
        ))}
      </div>

      <div className=" flex gap-9">
        <div className="mt-20 flex flex-col gap-5 h-[325px] w-[700px]">
          <h2 className="text-[#333333] font-semibold text-[44px]">
            Let's start with a strong title.
          </h2>
          <p className="text-[#666666] text-[18px]">
            This helps your job post stand out to the right candidates. It’s the
            first thing they’ll see, so make it count!
          </p>
        </div>

        <div className="flex flex-col h-[525px] w-[700px] mt-20 ">
          <div className="flex flex-col gap-5 w-full px-15 ">
            <h2 className="font-semibold text-[#333333] text-2xl ">
              Write a title for your job post
            </h2>

            <input
              type="text"
              name="title"
              {...register("title", {
                required: "Title required",
                minLength: {
                  value: 5,
                  message: "Title should be atleast 5 characters long",
                },
              })}
              className="w-full rounded p-4"
              placeholder="Enter Your Title"
            />
            {errors.title && (
              <span className="text-red-500 font-bold">
                {errors.title.message}
              </span>
            )}
            <div className="flex flex-col gap-5 py-3">
              <h3 className="text-[18px] ">Example titles</h3>
              <ul className="text-[16px] flex flex-col gap-5 text-[#666666] list-disc px-3 ">
                <li>
                  UX/UI designer to bring website mockup and prototype to life
                </li>
                <li>
                  Video editor needed to create whiteboard explainer video
                </li>
                <li>
                  Remote assistant to handle scheduling & customer support
                </li>
              </ul>
              <div className="flex justify-end mt-5">
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-blue-900 text-white w-[150] p-3 border "
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
