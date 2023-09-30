"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import testPic from "../../public/img/images/Group 185.png";
import Image from "next/image";

export default function MainSlider() {
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
        <SwiperSlide className="hero-slide swiper-slide">
          <h2 className="title">Воздуходувки</h2>
          <h3 className="text">
            Роторные и вихревые воздуходувки AIRSYST, производятся в Турецкой
            Республике из европейских комплектующих. Высокая надежность и
            быстрая поставка.
          </h3>
          <a href="{{slider.link}}" className="btn">
            Узнать больше
          </a>
          <Image src={testPic} alt="" width={260} height={350} />
        </SwiperSlide>
        <SwiperSlide className="hero-slide swiper-slide">
          <h2 className="title">Воздуходувки</h2>
          <h3 className="text">
            Роторные и вихревые воздуходувки AIRSYST, производятся в Турецкой
            Республике из европейских комплектующих. Высокая надежность и
            быстрая поставка.
          </h3>
          <a href="{{slider.link}}" className="btn">
            Узнать больше
          </a>
          <Image src={testPic} alt="" width={260} height={350} />
        </SwiperSlide>
        <SwiperSlide className="hero-slide swiper-slide">
          <h2 className="title">Воздуходувки</h2>
          <h3 className="text">
            Роторные и вихревые воздуходувки AIRSYST, производятся в Турецкой
            Республике из европейских комплектующих. Высокая надежность и
            быстрая поставка.
          </h3>
          <a href="{{slider.link}}" className="btn">
            Узнать больше
          </a>
          <Image src={testPic} alt="" width={260} height={350} />
        </SwiperSlide>
        <SwiperSlide className="hero-slide swiper-slide">
          <h2 className="title">Воздуходувки</h2>
          <h3 className="text">
            Роторные и вихревые воздуходувки AIRSYST, производятся в Турецкой
            Республике из европейских комплектующих. Высокая надежность и
            быстрая поставка.
          </h3>
          <a href="{{slider.link}}" className="btn">
            Узнать больше
          </a>
          <Image src={testPic} alt="" width={490} height={444} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
