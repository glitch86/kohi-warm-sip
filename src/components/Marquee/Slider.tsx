import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper/modules";

type Props = {
    children: ReactNode,
    reverse: boolean,
}
const Slider = ({ children, reverse }: Props) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      speed={2000}
      autoplay={{
        delay: 0,
        reverseDirection: reverse===true? true : false,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      modules={[Autoplay]}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
