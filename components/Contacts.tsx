import Image from "next/image";
import tgIcon from "../public/img/icons/telegram.svg";
import whatsappIcon from "../public/img/icons/whatsapp.svg";
import viberIcon from "../public/img/icons/viber.svg";

interface Props {
  title: string;
  phones: string[];
}

export default function Contacts({ title, phones }: Props) {
  return (
    <div className="contacts">
      <div className="contacts__left">
        <div>{title}</div>
        <div className="smm">
          <a
            target="_blank"
            href={`https://t.me/${phones[0]}`}
            className="smm__item"
          >
            <Image
              width={21}
              height={21}
              className="lazyload"
              src={tgIcon}
              alt=""
            />
          </a>
          <a
            target="_blank"
            href={`https://wa.me/${phones[0]}`}
            className="smm__item"
          >
            <Image
              width={21}
              height={21}
              className="lazyload"
              src={whatsappIcon}
              alt=""
            />
          </a>
          <a
            target="_blank"
            href={`viber://chat?number=${phones[0]}`}
            className="smm__item"
          >
            <Image
              width={21}
              height={21}
              className="lazyload"
              src={viberIcon}
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="contacts__right">
        {phones.map((phone, index) => {
          return (
            <a
              key={index}
              target="_blank"
              href={`tel:${phone}`}
              className="tel"
            >
              {phone}
            </a>
          );
        })}
      </div>
    </div>
  );
}
