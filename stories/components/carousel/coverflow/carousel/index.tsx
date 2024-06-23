import React from "react";
import { Swiper } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { CoverflowCarouselProps } from "../../../../interfaces/carousel/coverflowCarousel";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export const CoverflowCarousel = ({
  slideShadows = false,
  children,
}: CoverflowCarouselProps) => {
  return (
    <>
      <div className="col-12 d-flex align-items-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: slideShadows,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {children}
        </Swiper>
      </div>
    </>
  );
};
