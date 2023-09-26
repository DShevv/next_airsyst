import Link from "next/link";
import "../app/globals.css";
import logo from "../public/img/images/airsyst.svg";
import Image from "next/image";
import WorkTime from "./WorkTime";
import Email from "./Email";
import Contacts from "./Contacts";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__item">
          <Link href={"/"} className="logo">
            <Image src={logo} width={170} height={38} />
          </Link>
          <div className="copyright">© 2015-2023</div>
        </div>
        <div className="footer__item">
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
        <div className="footer__item">
          <WorkTime />
          <Email />
        </div>
        <div className="footer__item">
          <Contacts
            title="Отдел продаж"
            phones={["+7 702 660 20 47", "+7 702 871 12 51"]}
          />
          <Contacts title="Отдел сервиса" phones={["+7 702 660 20 47"]} />
        </div>
      </div>
    </footer>
  );
}
