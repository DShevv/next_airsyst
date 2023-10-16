import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ProjectSlider from "@/components/ProjectSlider/ProjectSlider";
import React from "react";
import gr1 from "@/public/img/images/gr1.jpg";
import gr2 from "@/public/img/images/gr2.jpg";
import gr3 from "@/public/img/images/gr3.jpg";
import gr4 from "@/public/img/images/gr4.jpg";

export default function Page() {
  return (
    <main>
      <div className="wrap">
        <BreadCrumbs
          currentName={`ОАО "Гродно Азот" (Беларусь)`}
          items={[
            { link: "/", title: "Главная" },
            { link: "/projects", title: "Наши проекты" },
          ]}
        />
      </div>
      <div className="projects wrap">
        <h1 className="title">Наши проекты</h1>
        <div className="projects__date">
          <div className="projects__day">10</div>
          <div className="project__small-date">
            <div className="projects__month">апреля</div>
            <div className="projects__year">2022</div>
          </div>
        </div>
        <h3 className="projects__customer">{`ОАО "Гродно Азот" (Беларусь)`}</h3>
        <h3 className="projects__name">
          Шефмонтаж и ПНР компрессорной станции с адсорбционными осушителями
        </h3>
        <h4 className="projects__descr">
          Проведение шефмонтажный и пусконаладочных работ в цехе Олеум. После
          введения санкций немецкий поставщик комплексного оборудования
          отказался проводить запуск оборудования в эксплуатацию. В результате
          чего специалисты группы компаний AIRSYST провели оценку поставленного
          оборудования, произвели расстановку оборудования на ограниченной
          площадке, провели ревизию материалов для монтажа, скомпоновали
          обвязку, произвели подключение слаботочных систем управления,
          запустили оборудование в работу, сдали объект в эксплуатацию.
          Особенности выполнеия проекта: 1. Отсутствие описания по поставленным
          комплектующим для монтажа компрессорной станции (приходилось
          разбираться со всеми вопросами на месте) 2. Отсутствие свободного
          доступа на склад временного хранения (пришлось договариваться с зав.
          складом о доступе на склад, для ревизии комонентов и компоновки
          обвязки) 3. Осуществление обвязки в работающем цеху (повышенный шум,
          опасность выброса сернистого газа)
        </h4>
      </div>
      <ProjectSlider images={[gr1.src, gr2.src, gr3.src, gr4.src]} />
    </main>
  );
}
