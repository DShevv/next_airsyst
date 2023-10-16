import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ProjectSlider from "@/components/ProjectSlider/ProjectSlider";
import React from "react";
import rp1 from "@/public/img/images/rip1.jpg";
import rp2 from "@/public/img/images/rip2.jpg";
import rp3 from "@/public/img/images/rip3.jpg";
import rp4 from "@/public/img/images/rip4.jpg";

export default function Page() {
  return (
    <main>
      <div className="wrap">
        <BreadCrumbs
          currentName={`REPSOL (Испания)`}
          items={[
            { link: "/", title: "Главная" },
            { link: "/projects", title: "Наши проекты" },
          ]}
        />
      </div>
      <div className="projects wrap">
        <h1 className="title">Наши проекты</h1>
        <div className="projects__date">
          <div className="projects__day">5</div>
          <div className="project__small-date">
            <div className="projects__month">января</div>
            <div className="projects__year">2023</div>
          </div>
        </div>
        <h3 className="projects__customer">{`REPSOL (Испания)`}</h3>
        <h3 className="projects__name">Генератор азота GN-3000</h3>
        <h4 className="projects__descr">
          Поставка генератора азота GN-3000 на нефтеперерабатывающеее
          предприятие. Генератор используется для создания зазовой подушки и
          продувки магистралей для технологических нужд. Чистота азота 99,99%,
          производительность 130 м3/ч.
        </h4>
      </div>
      <ProjectSlider images={[rp1.src, rp2.src, rp3.src, rp4.src]} />
    </main>
  );
}
