"use client";
import testPic from "../public/img/images/certificates.jpg";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  arrows: true,
  draggable: true,
};

export default function SertifikatesSlider2() {
  return (
    <section className="reviews wrap">
      <h2 className="title">Сертификаты</h2>
      <Slider {...settings}>
        <div className="reviews-item">
          <Image src={testPic} alt="сертификат" height={470} width={332} />
          <div className="reviews-item__title">
            1060478_ДС ТР ЕАЭС N RU Д-CN.ГА05.В.1078319
          </div>
        </div>
        <div className="reviews-item">
          <Image src={testPic} alt="сертификат" height={470} width={332} />
          <div className="reviews-item__title">
            1060478_ДС ТР ЕАЭС N RU Д-CN.ГА05.В.1078319
          </div>
        </div>
        <div className="reviews-item">
          <Image src={testPic} alt="сертификат" height={470} width={332} />
          <div className="reviews-item__title">
            1060478_ДС ТР ЕАЭС N RU Д-CN.ГА05.В.1078319
          </div>
        </div>
        <div className="reviews-item">
          <Image src={testPic} alt="сертификат" height={470} width={332} />
          <div className="reviews-item__title">
            1060478_ДС ТР ЕАЭС N RU Д-CN.ГА05.В.1078319
          </div>
        </div>
        <div className="reviews-item">
          <Image src={testPic} alt="сертификат" height={470} width={332} />
          <div className="reviews-item__title">
            1060478_ДС ТР ЕАЭС N RU Д-CN.ГА05.В.1078319
          </div>
        </div>
        <div className="reviews-item">
          <Image src={testPic} alt="сертификат" height={470} width={332} />
          <div className="reviews-item__title">
            1060478_ДС ТР ЕАЭС N RU Д-CN.ГА05.В.1078319
          </div>
        </div>
      </Slider>
    </section>
  );
}
