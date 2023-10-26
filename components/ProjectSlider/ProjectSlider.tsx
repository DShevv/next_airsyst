"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  images: string[];
}

export default function ProjectSlider({ images }: Props) {
  return (
    <div className="wrap">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="project__slider"
        breakpoints={{
          300: { slidesPerView: 1 },
          640: { slidesPerView: 3 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="project__slide">
            <Link
              href={`/?modal=true&image=${"https://airsyst.kz/" + image}`}
              scroll={false}
            >
              <Image
                src={"https://airsyst.kz/" + image}
                alt=""
                height={340}
                width={273}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP0Tk+vBwADuAGaXigw8gAAAABJRU5ErkJggg=="
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
