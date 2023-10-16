"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import testPic from "../public/img/images/cerf.jpg";
import tp480 from "@/public/img/images/1060480_ДС_ТР_ЕАЭС_N_RU_Д-CN.ГА05.В.1082719.jpg";
import tpts from "@/public/img/images/Генераторы_азота_и_кислорода.jpg";
import comp from "@/public/img/images/компрессоры_ТР_ТС.jpg";
import direl from "@/public/img/images/Дизельные_компрессоры_.jpg";
import filters from "@/public/img/images/ТР_ТС_фильтры.jpg";
import refrs from "@/public/img/images/ТР_ТС_осушители_рефрижераторные.jpg";
import soot from "@/public/img/images/ссоответствия Сертификат_032-2013_генераторы_азота_кислорода.jpg";
import tp478 from "@/public/img/images/1060478_ДС_ТР_ЕАЭС_N_RU_Д-CN.ГА05.В.1078319.jpg";
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
          <Image src={tp480} alt="сертификат" height={470} width={332} />
          <div className="certificate-slide__title">
            1060480_ДС ТР ЕАЭС N RU Д-CN.ГА05.В.1082719
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="certificate-slide">
        <Link href={`/?modal=true&image=${testPic.src}`} scroll={false}>
          <Image src={tpts} alt="сертификат" height={470} width={332} />
          <div className="certificate-slide__title">
            ТР ТС генераторы азота и кислорода
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="certificate-slide">
        <Link href={`/?modal=true&image=${testPic.src}`} scroll={false}>
          <Image src={comp} alt="сертификат" height={470} width={332} />
          <div className="certificate-slide__title">
            Компрессоры AIRSYST ТР ТС
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="certificate-slide">
        <Link href={`/?modal=true&image=${testPic.src}`} scroll={false}>
          <Image src={direl} alt="сертификат" height={470} width={332} />
          <div className="certificate-slide__title">
            Дизельные компрессоры AIRSYST ТР ТС
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="certificate-slide">
        <Link href={`/?modal=true&image=${testPic.src}`} scroll={false}>
          <Image src={filters} alt="сертификат" height={470} width={332} />
          <div className="certificate-slide__title">
            Сертификат ТР ТС 10 фильтры
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="certificate-slide">
        <Link href={`/?modal=true&image=${testPic.src}`} scroll={false}>
          <Image src={refrs} alt="сертификат" height={470} width={332} />
          <div className="certificate-slide__title">
            ТР ТС 04/10/20 рефрижераторные осушители
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="certificate-slide">
        <Link href={`/?modal=true&image=${testPic.src}`} scroll={false}>
          <Image src={soot} alt="сертификат" height={470} width={332} />
          <div className="certificate-slide__title">
            ТР ТС 032/2013 генераторы азота и кислорода
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="certificate-slide">
        <Link href={`/?modal=true&image=${testPic.src}`} scroll={false}>
          <Image src={tp478} alt="сертификат" height={470} width={332} />
          <div className="certificate-slide__title">
            1060478_ДС ТР ЕАЭС N RU Д-CN.ГА05.В.1078319
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
