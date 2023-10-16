import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ProjectSlider from "@/components/ProjectSlider/ProjectSlider";
import React from "react";
import raton1 from "@/public/img/images/raton1.jpg";
import raton2 from "@/public/img/images/raton2.jpg";
import raton3 from "@/public/img/images/raton3.jpg";
import raton4 from "@/public/img/images/raton4.jpg";
import raton5 from "@/public/img/images/raton5.jpg";

export default function Page() {
  return (
    <main>
      <div className="wrap">
        <BreadCrumbs
          currentName={`
СЭЗ "Гомель-Ратон" (Беларусь)`}
          items={[
            { link: "/", title: "Главная" },
            { link: "/projects", title: "Наши проекты" },
          ]}
        />
      </div>
      <div className="projects wrap">
        <h1 className="title">Наши проекты</h1>
        <div className="projects__date">
          <div className="projects__day">7</div>
          <div className="project__small-date">
            <div className="projects__month">марта</div>
            <div className="projects__year">2023</div>
          </div>
        </div>
        <h3 className="projects__customer">
          {`
СЭЗ "Гомель-Ратон" (Беларусь)`}
        </h3>
        <h3 className="projects__name">Генератор азота GN-4000 99,999%</h3>
        <h4 className="projects__descr">
          Итальяно-Беларусская компания расположенная в Свободной Экономической
          Зоне «Гомель-Ратон». Компания производит широкий компонентов для
          пищевой промышленности. С этой целью была приобретена станция по
          производству азота высокой чистоты 99,999% и производительности 100
          м3/ч. В состав станции ввошли: винтовые компрессоры AIRSYST с прямым
          приводом AS-90 D; осушитель; система фильтрования, включая угольную
          колону (остатчное содержание масла не более 0,003 мл/м3); генератор
          азота GN-4000; ресиверы с полимерным покрытием внутри (для сверх
          чистых производств). С момента получения предопалты, станция была
          поставлена за 58 календарных дней. В апреле 2023 планируется ввод в
          эксплуатацию
        </h4>
      </div>
      <ProjectSlider
        images={[raton1.src, raton2.src, raton3.src, raton4.src, raton5.src]}
      />
    </main>
  );
}
