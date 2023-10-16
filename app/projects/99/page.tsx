import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ProjectSlider from "@/components/ProjectSlider/ProjectSlider";
import React from "react";
import image from "@/public/img/images/генератор.jpg";
import great1 from "@/public/img/images/great1.jpg";
import great2 from "@/public/img/images/great2.jpg";
import great3 from "@/public/img/images/great3.jpg";
import great4 from "@/public/img/images/great4.jpg";
import great5 from "@/public/img/images/great5.jpg";
import great6 from "@/public/img/images/great6.jpg";

export default function Page() {
  return (
    <main>
      <div className="wrap">
        <BreadCrumbs
          currentName={`Индустриальный парк "ВЕЛИКИЙ КАМЕНЬ" (Беларусь)`}
          items={[
            { link: "/", title: "Главная" },
            { link: "/projects", title: "Наши проекты" },
          ]}
        />
      </div>
      <div className="projects wrap">
        <h1 className="title">Наши проекты</h1>
        <div className="projects__date">
          <div className="projects__day">4</div>
          <div className="project__small-date">
            <div className="projects__month">июля</div>
            <div className="projects__year">2023</div>
          </div>
        </div>
        <h3 className="projects__customer">
          {`Индустриальный парк "ВЕЛИКИЙ КАМЕНЬ" (Беларусь)`}
        </h3>
        <h3 className="projects__name">Генератор азота GN-1200</h3>
        <h4 className="projects__descr">
          Подбор и разработка азотной станции для печатных машин. Долгое время
          заказчик работал с жидким азотом. В результате экономических расчетов,
          было принято решение о закупке собственного генератора азота.
          Планируемый срок окупаемости проекта 12 месяцев (при 2-х сменном
          режиме работы). Чистота газа 99,999%, производительность 27 м3/ч.
          Поставка ожидается в начале июля 2023. Мы предоставляем нашим клиентам
          премиум качество по адекватной цене. Упаковка - деревянный ящик,
          обеспечивает сохраннность груза при транспортировке на протяжении
          всего пути. По результатам ПНР была достигнута чистота азота 99,9999%,
          при производительности 27 м3/ч. Видео станции можно посмотреть по
          ссылке <br />
          <a href="https://disk.yandex.ru/i/sHzvbLlXW6wfSQ">
            https://disk.yandex.ru/i/sHzvbLlXW6wfSQ
          </a>
        </h4>
      </div>
      <ProjectSlider
        images={[
          great1.src,
          great2.src,
          great3.src,
          great4.src,
          great5.src,
          great6.src,
        ]}
      />
    </main>
  );
}
