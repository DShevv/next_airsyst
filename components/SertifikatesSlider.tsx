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
import { useFetch } from "@/hooks/useFetch";

interface ICerf {
  title: string;
  image_url: string;
}

export default function SertifikatesSlider() {
  const { data } = useFetch<ICerf[]>({ endpoint: "certificates/list" });

  return (
    data &&
    data.length > 0 && (
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
        {data.map((cerf, index) => (
          <SwiperSlide key={index} className="certificate-slide">
            <Link
              href={`/?modal=true&image=https://airsyst.kz/${cerf.image_url}`}
              scroll={false}
            >
              <Image
                src={"https://airsyst.kz/" + cerf.image_url}
                alt="сертификат"
                height={470}
                width={332}
              />
              <div className="certificate-slide__title">{cerf.title}</div>
            </Link>
          </SwiperSlide>
        ))}
        <SwiperSlide key={100} className="certificate-slide">
          <Link href={`/?modal=true&image=${testPic.src}`} scroll={false}>
            <Image src={tp480} alt="сертификат" height={470} width={332} />
            <div className="certificate-slide__title">
              1060480_ДС ТР ЕАЭС N RU Д-CN.ГА05.В.1082719
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    )
  );
}
