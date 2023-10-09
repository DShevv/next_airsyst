"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as TSwiper } from "swiper/types";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

interface Props {
  images: string[];
}

export default function ItemSlider({ images }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<TSwiper | null>(null);

  return (
    <div className="card__sliders">
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="card__slider-main"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image src={image} alt="" width={630} height={390} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="card__slider-thumbs"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image src={image} alt="" width={200} height={155} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
