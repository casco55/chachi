import React from "react";
import { CoverflowCarouselItemProps } from "../../../../interfaces/carousel/coverflowCarousel";
import { SwiperSlide } from "swiper/react";
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
