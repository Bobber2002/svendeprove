﻿import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

const CalenderPage = () => {
  return (
    <div
      id="HomePage"
      className="h-full w-full flex flex-col items-center bg-primary px-6 pt-10"
    >
      <div className="w-full h-full">
        <p className="text-4xl pb-6 text-themewhite">Kalender</p>

        <Swiper
          id="slider"
          className="h-[40rem] overflow-y-clip"
          direction={"vertical"}
          slidesPerView={4.5}
          freeMode={true}
          modules={[FreeMode]}
        >
          <SwiperSlide
            className="w-full !h-[107px] px-8 py-6 text-ellipsis whitespace-nowrap bg-white mb-8 bg-contain bg-center rounded-[11px] overflow-hidden flex flex-col-reverse justify-center"
          >
            <h3 className="text-lg h-5">Mandag 12:38</h3>
            <h2 className="text-4xl text-ellipsis overflow-hidden">This is the class youre signing up to</h2>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CalenderPage;
