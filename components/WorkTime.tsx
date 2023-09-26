import Image from "next/image";
import timeIcon from "../public/img/icons/time.svg";

export default function WorkTime() {
  return (
    <div className="time-work">
      <Image
        width={26}
        height={26}
        className="lazyload"
        src={timeIcon}
        alt="Время работы"
      />
      <div className="time-work__items">
        <div className="time-work__item">
          <strong>Пн-Пт: </strong>
          10:00-18:00
        </div>
        <div className="time-work__item">
          <strong>Сб-Вс: </strong>
          Выходной
        </div>
      </div>
    </div>
  );
}
