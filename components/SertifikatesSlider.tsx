"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import testPic from "../public/img/images/certificates.jpg";
import Image from "next/image";

export default function SertifikatesSlider() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className="certificate-swiper"
      breakpoints={{
        300: { slidesPerView: 1 },
        640: { slidesPerView: 3 },
      }}
    >
      <SwiperSlide className="certificate-slide">
        <Image src={testPic} alt="сертификат" height={470} width={332} />
        <div className="certificate-slide__title">
          Сертификат ТР ТС 10 фильтры
        </div>
      </SwiperSlide>
      <SwiperSlide className="certificate-slide">
        <Image src={testPic} alt="сертификат" height={470} width={332} />
        <div className="certificate-slide__title">
          Сертификат ТР ТС 10 фильтры
        </div>
      </SwiperSlide>
      <SwiperSlide className="certificate-slide">
        <Image src={testPic} alt="сертификат" height={470} width={332} />
        <div className="certificate-slide__title">
          Сертификат ТР ТС 10 фильтры
        </div>
      </SwiperSlide>
      <SwiperSlide className="certificate-slide">
        <Image src={testPic} alt="сертификат" height={470} width={332} />
        <div className="certificate-slide__title">
          Сертификат ТР ТС 10 фильтры
        </div>
      </SwiperSlide>
      <SwiperSlide className="certificate-slide">
        <Image src={testPic} alt="сертификат" height={470} width={332} />
        <div className="certificate-slide__title">
          Сертификат ТР ТС 10 фильтры
        </div>
      </SwiperSlide>
      <SwiperSlide className="certificate-slide">
        <Image src={testPic} alt="сертификат" height={470} width={332} />
        <div className="certificate-slide__title">
          Сертификат ТР ТС 10 фильтры
        </div>
      </SwiperSlide>
      <SwiperSlide className="certificate-slide">
        <Image src={testPic} alt="сертификат" height={470} width={332} />
        <div className="certificate-slide__title">
          Сертификат ТР ТС 10 фильтры
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
