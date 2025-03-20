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
            <div className=" pb-5">
              <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 items-center gap-6 p-4 rounded-2xl achivementShadow">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold mb-3">{achivement.title}</h3>
                  <p className="text-sm text-darkgrey">Issued By {achivement.issued_by}</p>
                  <div className="flex gap-6 text-darkgrey text-sm">
                    <p>Issued Date: {achivement.issued_date}</p>
                    <p>Duration: {achivement.course_duration}</p>
                  </div>
                  <p className="text-justify mt-4">{achivement.description}</p>
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
