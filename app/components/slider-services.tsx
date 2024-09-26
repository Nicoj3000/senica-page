"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { serviceData } from '@/data';
import { useTranslation } from "react-i18next";

const SliderServices = () => {
  const { t } = useTranslation();

  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className="h-[400px] md:h-[500px] w-[300px] md:w-[900px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index} >
          <div className="flex flex-col mt-8 px-5 py-10 h-auto rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] gap-2 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2">
            <div className="mb-4 text-5xl text-secondary flex justify-center">{item.icon}</div>
            <div className="text-center">
              <h3 className="mb-4 text-xl">{t(item.titleKey)}</h3>
              <p className="text-base">{t(item.descriptionKey)}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderServices;