import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ProjectSlider from "@/components/ProjectSlider/ProjectSlider";
import React from "react";
import image from "@/public/img/images/генератор.jpg";

export default function page() {
  return (
    <main>
      <div className="wrap">
        <BreadCrumbs
          currentName={`ОАО "Волковысский мясокомбинат" (Беларусь)`}
          items={[
            { link: "/", title: "Главная" },
            { link: "/projects", title: "Наши проекты" },
          ]}
        />
      </div>
      <div className="projects wrap">
        <h1 className="title">Наши проекты</h1>
        <div className="projects__date">
          <div className="projects__day">15</div>
          <div className="project__small-date">
            <div className="projects__month">августа</div>
            <div className="projects__year">2023</div>
          </div>
        </div>
        <h3 className="projects__customer">
          {`ОАО "Волковысский мясокомбинат" (Беларусь)`}
        </h3>
        <h3 className="projects__name">
          Азотная станция GN-400 для упаковки продуктов питания{" "}
        </h3>
        <h4 className="projects__descr">
          В августе 2023 был подписан контракт на поставку азотной станции,
          предназначеной для упаковки пищевых продуктов. Особенность станции
          заключается в том, что в линию упаковки исключена возможность
          попадания некондиционного азота чистотой менее 99,999%. Благодаря
          уникальным технологиям станция может производить азот чистотой
          99,9999% без дополнительной очистки. Контролировать чистоту газа на
          протяжении всего рабочего цикла. Автоматическая система сброса
          некондиционного азота позволяет выдерживать самые высокие стандарты
          при производстве продукции. Планируемый срок ввода вэксплуатацию -
          середина октября 2023. По результатам запуска мы добавим видеоотчет о
          работе станции.
        </h4>
      </div>
      <ProjectSlider images={[image.src, image.src, image.src, image.src]} />
    </main>
  );
}
