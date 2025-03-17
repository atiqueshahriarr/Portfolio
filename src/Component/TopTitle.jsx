import React from "react";

const TopTitle = ({titleText, iconItem}) => {
  return (
    <div className="flex items-center gap-3 text-xl font-medium border w-fit px-6 border-borderGray py-2 rounded-4xl mb-10">
      <div className=" text-skyBlue ">{iconItem}</div>
      <h5 className="uppercase text-sm">{titleText}</h5>
    </div>
  );
};

export default TopTitle;
