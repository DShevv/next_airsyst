"use client";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Image from "next/image";
import photo from "@/public/img/images/photo_2022-03-12_13-55-38 1.jpg";
import logorem from "@/public/img/images/riemoitaly.jpg";
import logozt from "@/public/img/images/ztechnique.jpg";
import photo2 from "@/public/img/images/photo_2022-03-12_13-55-39 1.jpg";
import photo3 from "@/public/img/images/photo_2022-03-12_13-55-54 1.jpg";
import SelectList from "@/components/SelectList/SelectList";
import air from "@/public/img/images/airsyst.svg";
import volk from "@/public/img/images/ВКМК.jpg";
import Link from "next/link";
import atlas from "@/public/img/images/atlascopo.svg";
import grodno from "@/public/img/images/grodno.bmp";
import renner from "@/public/img/images/renner.bmp";
import choc from "@/public/img/images/choclate.bmp";
import { useState } from "react";

export default function Projects() {
  const [selection, setSelection] = useState("");

  const onSelect = (newSelection: string | undefined) => {
    if (newSelection !== undefined) {
      setSelection(newSelection);
    }
  };
  const repair = () => {
    return (
      <div className="projects__items">
        <div className="projects__item">
          <div className="projects__preview">
            <Image width={255} height={300} alt="" src={grodno} />
            <Image
              width={100}
              height={30}
              alt=""
              className="projects__manufacturer"
              src={renner}
            />{" "}
          </div>
          <div className="projects__content">
            <div className="projects__date">
              <div className="projects__day">10</div>
              <div className="project__small-date">
                <div className="projects__month">апреля</div>
                <div className="projects__year">2022</div>
              </div>
            </div>
            <div className="projects__customer">
              ОАО &quot;Гродно Азот&quot; (Беларусь)
            </div>
            <div className="projects__name">
              Шефмонтаж и ПНР компрессорной станции с адсорбционными осушителями
            </div>
            <div className="projects__descr">
              Проведение шефмонтажный и пусконаладочных работ в цехе Олеум.
              После введения санкций немецкий поставщик комплексного
              оборудования отказался проводить запуск оборудования в
              эксплуатацию. В результате чего специалисты группы компаний
              AIRSYST провели оценку поставленного оборудования, произвели
              расстановку оборудования на ограниченной площадке, провели ревизию
              материалов для монтажа, скомпоновали обвязку, произвели
              подключение слаботочных систем управления, запустили оборудование
              в работу, сдали объект в эксплуатацию. Особенности выполнеия
              проекта: 1. Отсутствие описания по поставленным комплектующим для
              монтажа компрессорной станции (приходилось разбираться со всеми
              вопросами на месте) 2. Отсутствие свободного доступа на склад
              временного хранения (пришлось договариваться с зав. складом о
              доступе на склад, для ревизии комонентов и компоновки обвязки) 3.
              Осуществление обвязки в работающем цеху (повышенный шум, опасность
              выброса сернистого газа)
            </div>
            <a href="/projects/82/" className="btn">
              Подробнее
            </a>
          </div>
        </div>
        <div className="projects__item">
          <div className="projects__preview">
            <Image width={255} height={300} alt="" src={choc} />
            <Image
              width={100}
              height={30}
              alt=""
              className="projects__manufacturer"
              src={atlas}
            />{" "}
          </div>
          <div className="projects__content">
            <div className="projects__date">
              <div className="projects__day">01</div>
              <div className="project__small-date">
                <div className="projects__month">марта</div>
                <div className="projects__year">2022</div>
              </div>
            </div>
            <div className="projects__customer">
              CADBURYS CHOCLATE (Великобритания)
            </div>
            <div className="projects__name">обслуживание AtlasCopco</div>
            <div className="projects__descr">
              Проведение плановых технических обслуживаний на безмаслянных
              винтовых компрессорах ZR90VSD; ZR110VSD; COMPAIR D90 (замена
              сервисных наборов 4000; 8000; 16000)
            </div>
            <a href="/projects/1/" className="btn">
              Подробнее
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main>
      <div className="wrap">
        <BreadCrumbs
          currentName="О сервисном центре"
          items={[{ link: "/", title: "Главная" }]}
        />
      </div>
      <section className="service wrap">
        <h1 className="title">О сервисном центре</h1>
        <div className="about__top">
          <h4 className="about__text">
            <p>
              Группа компаний, под общим брендом <b>AIRSYST</b> была создана
              техническими специалистами, занимающимися капитальными ремонтами
              винтовых и центробежных компрессоров таких производителей, как
              Atlas Copco, Ingersoll Rand, Kaeser, Gardner Denver, Compair,
              BOGE, Dalgakiran и многих других. За долгие годы работы наши
              специалисты приобрели огромный опыт в подборе компрессорного
              оборудования; капитальных ремонтах винтовых блоков GHH RAND, ATLAS
              COPCO, ROTORCOMP, AERZEN, FINI COMPRESSOR, QUINCY и др; поставке
              расходных материалов и запасных частей.
            </p>
            <p>
              Мы начинали как небольшой сервисный центр по ремонту и
              обслуживанию винтовых компрессоров различных производителей.
              Постепенно, год за годом, мы обучали наших инженеров на заводах
              производителях (Hanwha Techwinn (Ю. Корея), Gardner Denver
              (Финляндия, Германия), Atlas Copco (Бельгия, Турция), Sullair
              (Ирландия)). Спустя 10 лет наши специалисты обслужили более 300
              единиц маслосмазываемых и безмаслянных компрессоров и
              воздуходувок; были проведены около 40 капитальных ремонтов с
              заменой ступеней на безмаслянных компрессорах Atlas Copco серий
              ZT/ZR/ZE/ZH; более 6000 часов сервисные инженеры провели за
              ремонтом и восстановлением на компрессорах сухого типа.
            </p>
            <p>
              Конечно же, хороший ремонт невозможно провести без качественных
              запчастей. В настоящее время у предприятий есть 2-а варианта
              обслуживания безмаслянных компрессоров: <br />
              - обслуживать компрессора и воздухоподготовку у официальных
              дилеров <br />
              - обратиться за реинжинирингом в нашу компанию <br />
            </p>
            <p>
              Если на предприятии работают машины, находящиеся на гарантии,
              имеет смысл работать с официальным представителем. Если же
              гарантия на компрессоры закончилась, то оптимальным вариантом
              будет вести работу с компанией, которая предлагает реинжиниринг.
            </p>
          </h4>
          <Image alt="" src={photo} width={501} height={666} />
        </div>
        <h4 className="about__text">
          <p>
            <b>Преимущества реинжиниринга от группы компаний AIRSYST:</b>
          </p>
          <p>
            - Оптимизация финансовых затрат на ремонт и обслуживание
            компрессоров серий ZT/ZR/ZE/ZH Atlas Copco - до 70% от стоимости
            оригинальных запасных частей
          </p>
          <p>
            - Предлагаем любые запчасти для компрессоров серий ZT/ZR/ZE/ZH Atlas
            Copco производства (RIEM) Италия или AIRTEC (Англия) с гарантией 24
            месяца.
          </p>
          <p>
            - Оптимальные сроки поставки запасных частей и компонентов
            (максимальный срок поставки ступеней до 30 дней)
          </p>
          <p>
            - Широкий ассортимент запасных частей для компрессоров серий
            ZT/ZR/ZE/ZH Atlas Copco в наличии
          </p>
          <p>
            - По согласованию с клиентом формируем склад запасных запчастей под
            парк оборудования
          </p>
          <p>
            - На все элементы, запчасти и работы дается гарантия 24 месяца. При
            желании клиента, гарантия может быть продлена до 60 месяцев*.
          </p>
          <p>- Выезд инженера в течение 3-х дней**</p>
          <p>- Технические консультации 24/7***</p>
          <p>
            - Расширенные сервисные договора, предусматривающие ведение парка
            оборудования клиента
          </p>

          <p>
            *-при заключении договора на расширенную гарантию
            <br />
            **- при заключении сервисного договора с абонентским обслуживанием
            <br />
            ***-при заключении договора на тех. поддержку
          </p>
        </h4>
        <h4 className="about__text">
          <p>
            <b>Наши партнеры по безмаслянным компрессорам:</b>
          </p>
          <p>
            <Image alt="" src={logorem} width={270} height={48} />
          </p>
          <p>
            Riem Italy Assistance Compressors — это компания с 40 летним опытом
            продажи, обслуживания и производства промышленного оборудования как
            основных брендов, так и запатентованных компонентов. Мы можем
            удовлетворить любой запрос на роторно-винтовые и поршневые машины. В
            нашу структуру входят: мастерская для капитального ремонта и
            наладки; склад запасных частей; цеха по производству запасных
            частей; испытательные стенды. Мы работаем с 1976 года и у нас есть
            офисы по всему миру, что позволяет нам работать быстро и эффективно
            в любом месте. Наши офисы находятся: Рим (Италия), Москва (Россия),
            Индианаполис (США), Богор (Индонезия).
          </p>
          <p>
            Уже несколько десятилетий специализируется на производстве деталей
            для компрессоров.
          </p>
          <p>
            У нас есть внутреннее конструкторское бюро, которое проектирует
            детали, которые затем воспроизводятся. Для массового производства мы
            предпочитаем оснащать себя моделью, которая затем будет отправлена
            на наши проверенные литейные предприятия, чтобы мы могли производить
            конкретное сырье. По запросу мы также можем изготовить отдельные
            детали для машин, признанных устаревшими, и без запасных частей.
            Таким образом, мы даем клиентам возможность выбрать, восстанавливать
            ли машину или заменять ее. Мы можем производить детали из алюминия,
            латуни, чугуна, нержавеющей стали и углеродистой стали. Компания
            сертифицирована по ISO 9001:2015; ISO14001:2015; ISO45001:2018
          </p>
        </h4>
        <h4 className="about__text">
          <p>
            <b>Наши партнеры по безмаслянным компрессорам:</b>
          </p>
          <p>
            <Image alt="" src={logozt} width={270} height={51} />
          </p>
          <p>
            Наша основная возможность - предоставлять НЕ оригинальные запасные
            части для Atlas Copco и Ingersoll Rand ZR/ZT/ZA/ZE/ZB/ ZH; Centac;
            TA Cameron безмаслянные винтовые и центробежные компрессоры. с 1987
            г.
          </p>
          <p>
            Помимо запасных частей Atlas Copco для безмасляных компрессоров, мы
            также предлагаем широкий ассортимент запасных частей для
            OEM-производителей, таких как Kaeser, Ingersoll Rand, BOGE, Almig,
            Cooper Cameron, Joy, GHH и других ... Компания Airtec Filtration
            Limited стала пионером в разработке и производстве ряда безмасляных
            воздушных узлов для замены безмасляных компрессоров Atlas Copco
            мощностью от 90 до 900 кВт и версий VSD.
          </p>
          <p>
            Благодаря ассортименту воздушных головок размером 0,1,2,3,4,5 и 6 вы
            можете быть уверены в надежности наших продуктов для вашего
            безмасляного воздушного компрессора Atlas Copco. Кроме того, мы
            предлагаем запасные части для сушилок NON OEM ND &amp; MD. Компания
            сертифицирована по ISO 9001:2015
          </p>
        </h4>
        <div className="service__imgs">
          <Image alt="" src={photo2} width={470} height={432} />
          <Image alt="" src={photo3} width={676} height={432} />
        </div>
      </section>
      <section className="projects wrap">
        <h1 className="title">Наши проекты</h1>
        <SelectList
          returnSelected={onSelect}
          options={[
            { name: "Все проекты", link: "" },
            { name: "Сервис", link: "repair" },
            { name: "Продажи", link: "sell" },
          ]}
        />

        {repair()}
      </section>
    </main>
  );
}
