import Image from "next/image";
import mailIcon from "../public/img/icons/mail.svg";

export default function Email() {
  return (
    <div className="mail">
      <Image
        width={25}
        height={19}
        className="lazyload"
        src={mailIcon}
        alt=""
      />
      <a target="_blank" href="mailto:">
        info@airsyst.kz
      </a>
    </div>
  );
}
