import Icon from "@/public/assets/user.svg";
import Image from "next/image";

export default function Cab() {
  return (
    <a className="mail cab" href="/cab/">
      <Image width={25} height={19} src={Icon} alt="" />
      <span>Личный кабинет</span>
    </a>
  );
}
