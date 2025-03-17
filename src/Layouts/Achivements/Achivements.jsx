import { GrAchievement } from "react-icons/gr";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import TopTitle from "../../Component/TopTitle";
import { achivements } from "../../Component/achivements";

const Achivements = () => {
  return (
    <div>
      <TopTitle
        titleText="Achivements"
        iconItem={<GrAchievement />}></TopTitle>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper">
        {achivements.map((achivement) => (
          <SwiperSlide key={achivement.id}>
            <div className=" pb-10">
              <div className="grid lg:grid-cols-2 items-center gap-6 p-4 border border-borderGray rounded-2xl">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold mb-3">{achivement.title}</h3>
                  <p className="text-xs">Issued By {achivement.issued_by}</p>
                  <div className="flex gap-4">
                    <p className="text-xs">Issued Date: {achivement.issued_date}</p>
                    <p className="text-xs">Duration: {achivement.course_duration}</p>
                  </div>
                  <p className="text-sm text-justify mt-4">{achivement.description}</p>
                </div>
                <img
                  src={achivement.image}
                  alt=""
                  className="rounded-xl"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Achivements;
