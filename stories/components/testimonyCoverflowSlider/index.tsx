import React, { useEffect, useState } from "react";
import { TestimonySliderProps } from "../../interfaces/sliderInterfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { testimonyList } from "../../helpers/testimonies";
export const TestimonyCoverflowSlider = ({
  colsXs = 12,
  colsSm = 12,
  colsMd = 12,
  colsLg = 12,
  colsXl = 12,
  slideShadows = false,
  testimonies = testimonyList,
  slideMarginY = 5,
  slideBorderRadius = 3,
  slidePaddingX = 5,
  slidePaddingY = 5,
}: TestimonySliderProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const verifyIsMobile = () => {
    if (window.innerWidth <= 992) {
      setIsMobile(true);
      return;
    }
    setIsMobile(false);
  };
  useEffect(() => {
    verifyIsMobile();
    window.addEventListener("resize", verifyIsMobile);
  }, []);

  return (
    <>
      <div
        className={`col-${colsXs} col-sm-${colsSm} col-md-${colsMd} col-lg-${colsLg} col-xl-${colsXl}, d-flex align-items-center`}
      >
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
          {testimonies.map(({ title, text, name }, index) => (
            <>
              <SwiperSlide
                key={index}
                className={`border rounded-${slideBorderRadius} px-${slidePaddingX} py-${slidePaddingY} my-${slideMarginY}`}
                style={{ width: isMobile ? "70%" : "33%" }}
              >
                <div className={`item col-12 no-select-text`}>
                  <h1>{title}</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit, ipsa aliquid! Repudiandae sapiente sint placeat facere
                    nostrum, unde delectus nam minus odit, itaque fuga, quae
                    ipsam odio quisquam! Aperiam, recusandae.
                  </p>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </>
  );
};
