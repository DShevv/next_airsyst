import AirItem from "@/components/AirItem/AirItem";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import image from "@/public/img/images/Group_217.png";
import image2 from "@/public/img/images/vint.png";
import image3 from "@/public/img/images/vinth2o.png";
import image4 from "@/public/img/images/diaselcomp.png";
import image5 from "@/public/img/images/pistol.png";

export default function Compressors() {
  return (
    <main>
      <div className="wrap">
        <BreadCrumbs
          currentName="Компрессоры"
          items={[
            { link: "/", title: "Главная" },
            { link: "/oborudovanie", title: "Оборудование" },
          ]}
        />
      </div>
      <section className="air wrap">
        <h1 className="title">Компрессоры</h1>
        <p></p>
        <p>
          Компрессоры AIRSYST изготавливаются на производственных площадках в
          Турецкой Республике и Германии (винтовые маслосмазываемые и дизельные
          компрессоры) и Китае, Турции (винтовые безмаслянные компрессоры и
          дизельные компрессоры среднего давления). Гарантия на оборудование
          AIRSYST до 10 лет. Выбирая компрессоры AIRSYST Вы получаете
          европейское качество по лучшим ценам.
        </p>
        <p></p>
        <div className="air__items">
          <AirItem
            href="vint"
            title="Винтовые маслосмазываемые компрессоры"
            image={image}
          />
          <AirItem
            href="vintovye-maslosmazyvaemye-kompressory"
            title="Винтовые безмаслянные компрессоры сухого типа"
            image={image2}
          />
          <AirItem
            href="vintovye-maslosmazyvaemye-kompressory"
            title="Винтовые безмаслянные компрессоры с водяной смазкой"
            image={image3}
          />
          <AirItem
            href="vintovye-maslosmazyvaemye-kompressory"
            title="Передвижные дизельные компрессоры"
            image={image4}
          />
          <AirItem
            href="vintovye-maslosmazyvaemye-kompressory"
            title="Поршневые компрессоры"
            image={image5}
          />
        </div>
        <p></p>
        <h2>Производство промышленных компрессоров</h2>
        <p>
          Компания Airsyst предлагает современное компрессорное оборудование:
          производственные площадки располагаются в крупнейших городах мира. В
          ассортименте бренда найдутся подходящие варианты для любого
          предприятия: цена любого товара приятно впечатлит покупателей.
        </p>
        <p>
          Компрессор промышленный производит сжатие воздушного или газового
          потока. Приборы можно разделять по производительности, степени
          давления и рабочей среде. На рынке представлены модели с различными
          конструктивными и техническими параметрами.
        </p>
        <p>
          Без промышленного компрессора не обходится легкая и тяжелая
          промышленность, крупные производственные площадки, автомобильные
          мастерские.
        </p>
        <h2>Установка промышленного компрессора</h2>
        <p>
          Для монтажа компрессорных установок необходимо подготовить фундамент,
          тщательно выровнять поверхность и проложить отдельный силовой кабель.
          Последующую установку вентиляции и фиксации аппаратуры также стоит
          доверить профессионалам. Агрегат подключают к линии воздухозабора: для
          высокопроизводительных устройств монтируют линию забора воздуха с
          улицы, дополняя ее фильтром. В конце установки обязательно проводятся
          пусконаладочные работы
        </p>
        <p></p>
      </section>
    </main>
  );
}
