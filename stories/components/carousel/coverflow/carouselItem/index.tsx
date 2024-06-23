import React from "react";
import { CoverflowCarouselItemProps } from "../../../../interfaces/carousel/coverflowCarousel";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
export const CoverflowCarouselItem = ({
  children,
  itemWidth = 100,
  className = "",
}: CoverflowCarouselItemProps) => {
  return (
    <>
      <SwiperSlide className={className} style={{ width: `${itemWidth}%` }}>
        {children}
      </SwiperSlide>
    </>
  );
};
