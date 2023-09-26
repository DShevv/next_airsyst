import Image from "next/image";
import logo from "../public/img/images/airsyst.svg";
import closeImg from "../public/img/icons/nav-close.svg";
import openImg from "../public/img/icons/nav-open.svg";
import cartImg from "../public/img/icons/shopping card.png";
import Link from "next/link";

export default function NavBar() {
  return (
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
          <Link className="nav__item" href={"/o-nas"}>
            О компании
          </Link>
          <Link className="nav__item" href={"/proekty"}>
            Наши проекты
          </Link>
          <Link className="nav__item" href={"/sertifikaty"}>
            Сертификаты
          </Link>
          <Link className="nav__item" href={"/kontakty"}>
            Контакты
          </Link>
          <Link className="nav__item" href={"/dileram"}>
            Дилерам
          </Link>
        </div>
        <a href="{% url 'cart' %}" className="shopping-cart" attr-count="">
          <Image
            width={30}
            height={30}
            className="lazyload"
            src={cartImg}
            alt="cart"
          />
        </a>
        <div className="nav__open mobile">
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
  );
}
