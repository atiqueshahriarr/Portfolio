import React from "react";

const EducationCard = ({eduTitle, passYear, gpa, eduInstitute}) => {
  return (
    <div
      className="flex gap-2 md:gap-4"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      duration="2000">
      <div className="">
        <p className=" font-bold text-3xl w-12 -rotate-90 h-full flex items-center justify-center text-darkgrey">{passYear}</p>
      </div>
      <div className=" py-2 px-4 font-medium">
        <p className="text-xl md:text-2xl mb-2">{eduInstitute}</p>
        <div className="text-darkgrey text-sm border-l-2  pl-2">
          <p>{eduTitle}</p>
          <p>{gpa}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
