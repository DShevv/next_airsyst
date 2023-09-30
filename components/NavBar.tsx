"use client";
import Image from "next/image";
import logo from "../public/img/images/airsyst.svg";
import closeImg from "../public/img/icons/nav-close.svg";
import openImg from "../public/img/icons/nav-open.svg";
import cartImg from "../public/img/icons/shopping card.png";
import Link from "next/link";
import Contacts from "./Contacts";
import { useState } from "react";
import WorkTime from "./WorkTime";
import Email from "./Email";

export default function NavBar() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="wrap">
          <a href="/" className="logo">
            <Image
              width={170}
              height={38}
              className="lazyload"
              src={logo}
              alt="AirSyst"
            />
          </a>
          <div className="nav__items">
            <Link className="nav__item" href={"/products"}>
              Наши продукты
            </Link>
            <Link className="nav__item" href={"/about"}>
              О компании
            </Link>
            <Link className="nav__item" href={"/news"}>
              Новости
            </Link>
            <Link className="nav__item" href={"/projects"}>
              Наши проекты
            </Link>
            <Link className="nav__item" href={"/sertifikaty"}>
              Сертификаты
            </Link>
            <Link className="nav__item" href={"/contacts"}>
              Контакты
            </Link>
            <Link className="nav__item" href={"/diallers"}>
              Дилерам
            </Link>
          </div>
          <a href="{% url 'cart' %}" className="shopping-cart" attr-count="">
            <Image
              width={30}
              height={25}
              className="lazyload"
              src={cartImg}
              alt="cart"
            />
          </a>
          <div
            className={`nav__open mobile ${isOpened && "active"}`}
            onClick={() => setIsOpened(!isOpened)}
          >
            <Image
              width={37}
              height={18}
              className="lazyload nav__open-img"
              src={openImg}
              alt="menu"
            />
            <Image
              width={37}
              height={18}
              className="lazyload nav__open-close-img"
              src={closeImg}
              alt="close"
            />
          </div>
        </div>
      </nav>
      <div className={`nav-mobile mobile ${isOpened && "active"}`}>
        <div className="nav__items">
          <Link className="nav__item" href={"/products"}>
            Наши продукты
          </Link>
          <Link className="nav__item" href={"/about"}>
            О компании
          </Link>
          <Link className="nav__item" href={"/news"}>
            Новости
          </Link>
          <Link className="nav__item" href={"/proekty"}>
            Наши проекты
          </Link>
          <Link className="nav__item" href={"/sertifikaty"}>
            Сертификаты
          </Link>
          <Link className="nav__item" href={"/contacts"}>
            Контакты
          </Link>
          <Link className="nav__item" href={"/diallers"}>
            Дилерам
          </Link>
        </div>
        <Contacts
          title="Отдел продаж"
          phones={["+7 702 660 20 47", "+7 702 871 12 51"]}
        />
        <Contacts title="Отдел сервиса" phones={["+7 702 660 20 47"]} />
        <WorkTime />
        <Email />
      </div>
    </>
  );
}
