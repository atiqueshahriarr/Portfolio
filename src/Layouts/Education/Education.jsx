import React from "react";
import { IoMdBook } from "react-icons/io";
import EducationCard from "../../Component/EducationCard";
import TopTitle from "../../Component/TopTitle";

const Education = () => {
  return (
    <div id="education">
      <TopTitle
        titleText="Educational Milestones"
        iconItem={<IoMdBook />}></TopTitle>
      <div className="space-y-10">
        <EducationCard
          eduTitle="BSc. in Computer Science and Engineering"
          eduSubTitle=""
          passYear="2024"
          gpa="CGPA: 3.96 out of 4"
          eduInstitute="Daffodil International University"></EducationCard>
        <EducationCard
          eduTitle="Higher Secondary School Certificate"
          passYear="2019"
          gpa="GPA: 5 out of 5"
          eduInstitute="Dhaka College"></EducationCard>
        <EducationCard
          eduTitle="Secondary School Certificate"
          passYear="2017"
          gpa="GPA: 5 out of 5"
          eduInstitute="A.K. High School"></EducationCard>
      </div>
    </div>
  );
};

export default Education;
