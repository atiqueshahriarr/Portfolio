import React from "react";

const TopTitle = ({titleText, iconItem}) => {
  return (
    <div className="flex items-center gap-4  w-fit px-8 py-3 rounded-4xl mb-6 titleShadow">
      <div className=" text-skyBlue text-2xl">{iconItem}</div>
      <h5 className="font-medium uppercase">{titleText}</h5>
    </div>
  );
};

export default TopTitle;
