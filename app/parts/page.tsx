import Image from "next/image";
import AskForm from "@/components/AskForm/AskForm";
import part1 from "@/public/img/images/1 82827515.jpg";
import part2 from "@/public/img/images/parts.jpg";
import part3 from "@/public/img/images/3 741739.jpg";
import part4 from "@/public/img/images/4 300021016.jpg";
import part5 from "@/public/img/images/5 6.jpg";

export default function Parts() {
  return (
    <main className="parts wrap">
      <h1 className="title">Запчасти для компрессоров</h1>
      <h3 className="parts__text">
        Группа компаний под общим брендом AIRSYST, работает на рынках России,
        Беларуси, Евросоюза и Ирландии более 10 лет. За эти годы мы накопили
        колоссальный опыт по подбору оборудования, проведению капитальных
        ремонтов компрессорной техники различных производителей и продажи
        запасных частей и расходных материалов.
        <br />
        <br />
        Более 5 000 наименований запасных частей и расходных материалов, для
        компрессорной техники находятся на наших складах в Москве, Минске,
        Таллине и Дублине. На наших складах постоянно в наличии воздушные и
        масляные фильтры; сепараторы; клапаны минимального давления (MPVL);
        маслозапорные клапана, впускные клапана; разгрузочные клапана;
        термостаты; ремонтные комплекты, сальники и втулки, подшипники. Если
        какой-то позиции нет в наличии, мы осуществим поставку в самые короткие
        сроки.
        <br />
        <br />
        Мы предлагаем запчасти и фильтры к компрессорам Atlas Copco, Hanwha
        Group, Ingersoll Rand, Compair, BOGE, Kaeser, Ceccato, Gardner Denver,
        Dalgakiran, HERTZ, ECOMAK Almig, Alup и многих других.
        <br />
        <br />
        Если Вашему компрессору требуется замена винтового блока, за 10-15 мы
        привезем и установим новый или восстановленный блок с гарантией 1 год. А
        для сокращения ваших расходов, можем взять ваш элемент сжатия в зачет.
        <br />
        <br />
        <span>
          Позвоните нашим специалистам или оставьте заявку ниже, и мы сделаем
          отличное предложение для Вашей компании.
        </span>
      </h3>
      <div className="parts__imgs">
        <Image alt="" src={part1} width={373} height={340} />
        <Image alt="" src={part2} width={373} height={340} />
        <Image alt="" src={part3} width={373} height={340} />
        <Image alt="" src={part4} width={570} height={520} />
        <Image alt="" src={part5} width={570} height={520} />
      </div>
      <section className="feedback">
        <AskForm url="/ask" />
      </section>
    </main>
  );
}
