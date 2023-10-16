"use client";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import SelectList from "@/components/SelectList/SelectList";
import Image from "next/image";
import air from "@/public/img/images/airsyst.svg";
import renner from "@/public/img/images/renner.bmp";
import atlas from "@/public/img/images/atlascopo.svg";
import volk from "@/public/img/images/ВКМК.jpg";
import grate from "@/public/img/images/greate.jpg";
import raton from "@/public/img/images/raton.jpg";
import repsol from "@/public/img/images/repsol.jpg";
import grodno from "@/public/img/images/grodno.bmp";
import choc from "@/public/img/images/choclate.bmp";
import { useState } from "react";

export default function Projects() {
  const [selection, setSelection] = useState("");

  const onSelect = (newSelection: string | undefined) => {
    if (newSelection !== undefined) {
      setSelection(newSelection);
    }
  };

  const all = () => {
    return (
      <div className="projects__items">
        <div className="projects__item">
          <div className="projects__preview">
            <Image width={255} height={300} alt="" src={volk} />
            <Image
              width={100}
              height={30}
              alt=""
              className="projects__manufacturer"
              src={air}
            />
          </div>
          <div className="projects__content">
            <div className="projects__date">
              <div className="projects__day">15</div>
              <div className="project__small-date">
                <div className="projects__month">августа</div>
                <div className="projects__year">2023</div>
              </div>
            </div>
            <div className="projects__customer">
              ОАО &quot;Волковысский мясокомбинат&quot; (Беларусь)
            </div>
            <div className="projects__name">
              Азотная станция GN-400 для упаковки продуктов питания
            </div>
            <div className="projects__descr">
              В августе 2023 был подписан контракт на поставку азотной станции,
              предназначеной для упаковки пищевых продуктов. Особенность станции
              заключается в том, что в линию упаковки исключена возможность
              попадания некондиционного азота чистотой менее 99,999%. Благодаря
              уникальным технологиям станция может производить азот чистотой
              99,9999% без дополнительной очистки. Контролировать чистоту газа
              на протяжении всего рабочего цикла. Автоматическая система сброса
              некондиционного азота позволяет выдерживать самые высокие
              стандарты при производстве продукции. Планируемый срок ввода
              вэксплуатацию - середина октября 2023. По результатам запуска мы
              добавим видеоотчет о работе станции.
            </div>
            <a href="/projects/100/" className="btn">
              Подробнее
            </a>
          </div>
        </div>
        <div className="projects__item">
          <div className="projects__preview">
            <Image width={255} height={300} alt="" src={grate} />
            <Image
              width={100}
              height={30}
              alt=""
              className="projects__manufacturer"
              src={air}
            />
          </div>
          <div className="projects__content">
            <div className="projects__date">
              <div className="projects__day">04</div>
              <div className="project__small-date">
                <div className="projects__month">июля</div>
                <div className="projects__year">2023</div>
              </div>
            </div>
            <div className="projects__customer">
              Индустриальный парк &quot;ВЕЛИКИЙ КАМЕНЬ&quot; (Беларусь)
            </div>
            <div className="projects__name">Генератор азота GN-1200</div>
            <div className="projects__descr">
              Подбор и разработка азотной станции для печатных машин. Долгое
              время заказчик работал с жидким азотом. В результате экономических
              расчетов, было принято решение о закупке собственного генератора
              азота. Планируемый срок окупаемости проекта 12 месяцев (при 2-х
              сменном режиме работы). Чистота газа 99,999%, производительность
              27 м3/ч. Поставка ожидается в начале июля 2023. Мы предоставляем
              нашим клиентам премиум качество по адекватной цене. Упаковка -
              деревянный ящик, обеспечивает сохраннность груза при
              транспортировке на протяжении всего пути.
              <br />
              По результатам ПНР была достигнута чистота азота 99,9999%, при
              производительности 27 м3/ч. Видео станции можно посмотреть по
              ссылке{" "}
              <a href="https://disk.yandex.ru/i/sHzvbLlXW6wfSQ">
                https://disk.yandex.ru/i/sHzvbLlXW6wfSQ
              </a>
            </div>
            <a href="/projects/99/" className="btn">
              Подробнее
            </a>
          </div>
        </div>
        <div className="projects__item">
          <div className="projects__preview">
            <Image width={255} height={300} alt="" src={raton} />
            <Image
              width={100}
              height={30}
              alt=""
              className="projects__manufacturer"
              src={air}
            />
          </div>
          <div className="projects__content">
            <div className="projects__date">
              <div className="projects__day">07</div>
              <div className="project__small-date">
                <div className="projects__month">марта</div>
                <div className="projects__year">2023</div>
              </div>
            </div>
            <div className="projects__customer">
              СЭЗ &quot;Гомель-Ратон&quot; (Беларусь)
            </div>
            <div className="projects__name">
              Генератор азота GN-4000 99,999%
            </div>
            <div className="projects__descr">
              Итальяно-Беларусская компания расположенная в Свободной
              Экономической Зоне «Гомель-Ратон».
              <br />
              Компания производит широкий компонентов &nbsp;для пищевой
              промышленности. С этой целью была приобретена станция по
              производству азота высокой чистоты 99,999% и производительности
              100 м3/ч. В состав станции ввошли: винтовые компрессоры AIRSYST с
              прямым приводом AS-90 D; осушитель; система фильтрования, включая
              угольную колону (остатчное содержание масла не более 0,003 мл/м3);
              генератор азота GN-4000; ресиверы с полимерным покрытием внутри
              (для сверх чистых производств). С момента получения предопалты,
              станция была поставлена за 58 календарных дней. В апреле 2023
              планируется ввод в эксплуатацию.
            </div>
            <a href="/projects/98/" className="btn">
              Подробнее
            </a>
          </div>
        </div>
        <div className="projects__item">
          <div className="projects__preview">
            <Image width={255} height={300} alt="" src={repsol} />
            <Image
              width={100}
              height={30}
              alt=""
              className="projects__manufacturer"
              src={air}
            />{" "}
          </div>
          <div className="projects__content">
            <div className="projects__date">
              <div className="projects__day">25</div>
              <div className="project__small-date">
                <div className="projects__month">января</div>
                <div className="projects__year">2023</div>
              </div>
            </div>
            <div className="projects__customer">REPSOL (Испания)</div>
            <div className="projects__name">Генератор азота GN-3000</div>
            <div className="projects__descr">
              Поставка генератора азота GN-3000 на нефтеперерабатывающеее
              предприятие. Генератор используется для создания зазовой подушки и
              продувки магистралей для технологических нужд. Чистота азота
              99,99%, производительность 130 м3/ч.
            </div>
            <a href="/projects/97/" className="btn">
              Подробнее
            </a>
          </div>
        </div>
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

  const sell = () => {
    return (
      <div className="projects__items">
        <div className="projects__item">
          <div className="projects__preview">
            <Image width={255} height={300} alt="" src={volk} />
            <Image
              width={100}
              height={30}
              alt=""
              className="projects__manufacturer"
              src={air}
            />
          </div>
          <div className="projects__content">
            <div className="projects__date">
              <div className="projects__day">15</div>
              <div className="project__small-date">
                <div className="projects__month">августа</div>
                <div className="projects__year">2023</div>
              </div>
            </div>
            <div className="projects__customer">
              ОАО &quot;Волковысский мясокомбинат&quot; (Беларусь)
            </div>
            <div className="projects__name">
              Азотная станция GN-400 для упаковки продуктов питания
            </div>
            <div className="projects__descr">
              В августе 2023 был подписан контракт на поставку азотной станции,
              предназначеной для упаковки пищевых продуктов. Особенность станции
              заключается в том, что в линию упаковки исключена возможность
              попадания некондиционного азота чистотой менее 99,999%. Благодаря
              уникальным технологиям станция может производить азот чистотой
              99,9999% без дополнительной очистки. Контролировать чистоту газа
              на протяжении всего рабочего цикла. Автоматическая система сброса
              некондиционного азота позволяет выдерживать самые высокие
              стандарты при производстве продукции. Планируемый срок ввода
              вэксплуатацию - середина октября 2023. По результатам запуска мы
              добавим видеоотчет о работе станции.
            </div>
            <a href="/projects/100/" className="btn">
              Подробнее
            </a>
          </div>
        </div>
        <div className="projects__item">
          <div className="projects__preview">
            <Image width={255} height={300} alt="" src={grate} />
            <Image
              width={100}
              height={30}
              alt=""
              className="projects__manufacturer"
              src={air}
            />
          </div>
          <div className="projects__content">
            <div className="projects__date">
              <div className="projects__day">04</div>
              <div className="project__small-date">
                <div className="projects__month">июля</div>
                <div className="projects__year">2023</div>
              </div>
            </div>
            <div className="projects__customer">
              Индустриальный парк &quot;ВЕЛИКИЙ КАМЕНЬ&quot; (Беларусь)
            </div>
            <div className="projects__name">Генератор азота GN-1200</div>
            <div className="projects__descr">
              Подбор и разработка азотной станции для печатных машин. Долгое
              время заказчик работал с жидким азотом. В результате экономических
              расчетов, было принято решение о закупке собственного генератора
              азота. Планируемый срок окупаемости проекта 12 месяцев (при 2-х
              сменном режиме работы). Чистота газа 99,999%, производительность
              27 м3/ч. Поставка ожидается в начале июля 2023. Мы предоставляем
              нашим клиентам премиум качество по адекватной цене. Упаковка -
              деревянный ящик, обеспечивает сохраннность груза при
              транспортировке на протяжении всего пути.
              <br />
              По результатам ПНР была достигнута чистота азота 99,9999%, при
              производительности 27 м3/ч. Видео станции можно посмотреть по
              ссылке{" "}
              <a href="https://disk.yandex.ru/i/sHzvbLlXW6wfSQ">
                https://disk.yandex.ru/i/sHzvbLlXW6wfSQ
              </a>
            </div>
            <a href="/projects/99/" className="btn">
              Подробнее
            </a>
          </div>
        </div>
        <div className="projects__item">
          <div className="projects__preview">
            <Image width={255} height={300} alt="" src={raton} />
            <Image
              width={100}
              height={30}
              alt=""
              className="projects__manufacturer"
              src={air}
            />
          </div>
          <div className="projects__content">
            <div className="projects__date">
              <div className="projects__day">07</div>
              <div className="project__small-date">
                <div className="projects__month">марта</div>
                <div className="projects__year">2023</div>
              </div>
            </div>
            <div className="projects__customer">
              СЭЗ &quot;Гомель-Ратон&quot; (Беларусь)
            </div>
            <div className="projects__name">
              Генератор азота GN-4000 99,999%
            </div>
            <div className="projects__descr">
              Итальяно-Беларусская компания расположенная в Свободной
              Экономической Зоне «Гомель-Ратон».
              <br />
              Компания производит широкий компонентов &nbsp;для пищевой
              промышленности. С этой целью была приобретена станция по
              производству азота высокой чистоты 99,999% и производительности
              100 м3/ч. В состав станции ввошли: винтовые компрессоры AIRSYST с
              прямым приводом AS-90 D; осушитель; система фильтрования, включая
              угольную колону (остатчное содержание масла не более 0,003 мл/м3);
              генератор азота GN-4000; ресиверы с полимерным покрытием внутри
              (для сверх чистых производств). С момента получения предопалты,
              станция была поставлена за 58 календарных дней. В апреле 2023
              планируется ввод в эксплуатацию.
            </div>
            <a href="/projects/98/" className="btn">
              Подробнее
            </a>
          </div>
        </div>
        <div className="projects__item">
          <div className="projects__preview">
            <Image width={255} height={300} alt="" src={repsol} />
            <Image
              width={100}
              height={30}
              alt=""
              className="projects__manufacturer"
              src={air}
            />{" "}
          </div>
          <div className="projects__content">
            <div className="projects__date">
              <div className="projects__day">25</div>
              <div className="project__small-date">
                <div className="projects__month">января</div>
                <div className="projects__year">2023</div>
              </div>
            </div>
            <div className="projects__customer">REPSOL (Испания)</div>
            <div className="projects__name">Генератор азота GN-3000</div>
            <div className="projects__descr">
              Поставка генератора азота GN-3000 на нефтеперерабатывающеее
              предприятие. Генератор используется для создания зазовой подушки и
              продувки магистралей для технологических нужд. Чистота азота
              99,99%, производительность 130 м3/ч.
            </div>
            <a href="/projects/97/" className="btn">
              Подробнее
            </a>
          </div>
        </div>
      </div>
    );
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
          currentName="Наши проекты"
          items={[{ link: "/", title: "Главная" }]}
        />
      </div>
      <section className="projects wrap">
        <h1 className="title">Наши проекты</h1>
        <SelectList
          options={[
            { name: "Все проекты", link: "" },
            { name: "Сервис", link: "repair" },
            { name: "Продажи", link: "sell" },
          ]}
          returnSelected={onSelect}
        />
        <div className="projects__items">
          {selection === "" && all()}
          {selection === "repair" && repair()}
          {selection === "sell" && sell()}
        </div>
      </section>
    </main>
  );
}
