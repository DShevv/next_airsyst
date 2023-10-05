"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import testPic from "../public/img/images/cerf.jpg";
import Image from "next/image";
import Link from "next/link";

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
        <Link href={`/?modal=true&image=${testPic.src}`} scroll={false}>
          <Image src={testPic} alt="сертификат" height={470} width={332} />
          <div className="certificate-slide__title">
            Сертификат ТР ТС 10 фильтры
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="certificate-slide">
        <Link href={`/?modal=true&image=${testPic.src}`} scroll={false}>
          <Image src={testPic} alt="сертификат" height={470} width={332} />
          <div className="certificate-slide__title">
            Сертификат ТР ТС 10 фильтры
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="certificate-slide">
        <Link href={`/?modal=true&image=${testPic.src}`} scroll={false}>
          <Image src={testPic} alt="сертификат" height={470} width={332} />
          <div className="certificate-slide__title">
            Сертификат ТР ТС 10 фильтры
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="certificate-slide">
        <Link href={`/?modal=true&image=${testPic.src}`} scroll={false}>
          <Image src={testPic} alt="сертификат" height={470} width={332} />
          <div className="certificate-slide__title">
            Сертификат ТР ТС 10 фильтры
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="certificate-slide">
        <Link href={`/?modal=true&image=${testPic.src}`} scroll={false}>
          <Image src={testPic} alt="сертификат" height={470} width={332} />
          <div className="certificate-slide__title">
            Сертификат ТР ТС 10 фильтры
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="certificate-slide">
        <Link href={`/?modal=true&image=${testPic.src}`} scroll={false}>
          <Image src={testPic} alt="сертификат" height={470} width={332} />
          <div className="certificate-slide__title">
            Сертификат ТР ТС 10 фильтры
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="certificate-slide">
        <Link href={`/?modal=true&image=${testPic.src}`} scroll={false}>
          <Image src={testPic} alt="сертификат" height={470} width={332} />
          <div className="certificate-slide__title">
            Сертификат ТР ТС 10 фильтры
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
