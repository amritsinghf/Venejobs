import React from "react";

const ShowDetailsWrapper = ({children}) => {
  return (
    <div className="w-full max-w-[90%] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1240px] 2xl:max-w-[1400px] mx-auto my-10 lg:my-20">
      <div className="flex flex-col gap-10">{children}</div>
    </div>
  );
};

export default ShowDetailsWrapper;
