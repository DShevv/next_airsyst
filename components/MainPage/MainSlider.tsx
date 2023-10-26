"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useFetch } from "@/hooks/useFetch";

interface ISlides {
  title: string;
  description: string;
  image_url: string;
  link_url: string;
}

export default function MainSlider() {
  const { data, isLoading, error } = useFetch<ISlides[]>({
    endpoint: "sliders/list",
  });

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="hero-slider swiper"
      >
        {data &&
          data.map((slide) => (
            <SwiperSlide
              key={slide.link_url}
              className="hero-slide swiper-slide"
            >
              <h2 className="title">{slide.title}</h2>
              <h3 className="text">{slide.description}</h3>
              <a href={slide.link_url} className="btn">
                Узнать больше
              </a>
              <Image
                src={"https://airsyst.kz/" + slide.image_url}
                alt=""
                width={260}
                height={350}
              />
            </SwiperSlide>
          ))}
        {/*  <SwiperSlide className="hero-slide swiper-slide">
          <h2 className="title">Подбор азотных и кислородных станций</h2>
          <h3 className="text">
            Опытные специалисты AIRSYS помогут Вам подобрать оптимальное решение
            по обеспечению предприятия газообразным азотом и кислородом. Если Вы
            покупаете жидкий азот или кислород в баллонах , мы рассчитаем и
            поставим под ключ все необходимое оборудование.
          </h3>
          <a href="/oborudovanie" className="btn">
            Узнать больше
          </a>
          <Image src={oxygen} alt="" width={260} height={350} />
        </SwiperSlide>
        <SwiperSlide className="hero-slide swiper-slide">
          <h2 className="title">Генераторы кислорода</h2>
          <h3 className="text">
            Генераторы кислорода AIRSYST серии GO производительностью до 390
            м3/ч. Чистотой до 99%
          </h3>
          <a href="/oborudovanie/oxy-gen" className="btn">
            Узнать больше
          </a>
          <Image src={geno} alt="" width={260} height={350} />
        </SwiperSlide>
        <SwiperSlide className="hero-slide swiper-slide">
          <h2 className="title">Воздуходувки</h2>
          <h3 className="text">
            Роторные и вихревые воздуходувки AIRSYST, производятся в Турецкой
            Республике из европейских комплектующих. Высокая надежность и
            быстрая поставка.
          </h3>
          <a href="/oborudovanie/vozduh" className="btn">
            Узнать больше
          </a>
          <Image src={vozdu} alt="" width={260} height={350} />
        </SwiperSlide>
        <SwiperSlide className="hero-slide swiper-slide">
          <h2 className="title">Генераторы азота</h2>
          <h3 className="text">
            Генераторы азота AIRSYST серии GN производительностью до 2750 м3/ч.
            Чистотой до 99,9999%
          </h3>
          <a href="/oborudovanie/azote-gen" className="btn">
            Узнать больше
          </a>
          <Image src={vozda} alt="" width={490} height={444} />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
