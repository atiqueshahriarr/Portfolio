import React from "react";

const EducationCard = ({eduTitle, passYear, gpa, eduInstitute}) => {
  return (
    <div className="flex gap-2">
      <div className="bg-bgdark">
        <p className=" font-bold text-2xl w-12 -rotate-90 h-full flex items-center justify-center text-darkgrey">{passYear}</p>
      </div>
      <div className="w-96 bg-bgdark py-2 px-4 font-medium">
        <p className="text-skyBlue font-bold ">{eduInstitute}</p>
        <div className="text-darkgrey text-sm ">
          <p>{eduTitle}</p>
          <p>{gpa}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
