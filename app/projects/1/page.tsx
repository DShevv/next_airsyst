import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ProjectSlider from "@/components/ProjectSlider/ProjectSlider";
import React from "react";

import ch1 from "@/public/img/images/ch1.jpg";
import ch2 from "@/public/img/images/ch2.jpg";
import ch3 from "@/public/img/images/ch3.jpg";

export default function Page() {
  return (
    <main>
      <div className="wrap">
        <BreadCrumbs
          currentName={`CADBURYS CHOCLATE (Великобритания)`}
          items={[
            { link: "/", title: "Главная" },
            { link: "/projects", title: "Наши проекты" },
          ]}
        />
      </div>
      <div className="projects wrap">
        <h1 className="title">Наши проекты</h1>
        <div className="projects__date">
          <div className="projects__day">1</div>
          <div className="project__small-date">
            <div className="projects__month">марта</div>
            <div className="projects__year">2022</div>
          </div>
        </div>
        <h3 className="projects__customer">{`CADBURYS CHOCLATE (Великобритания)`}</h3>
        <h3 className="projects__name">обслуживание AtlasCopco</h3>
        <h4 className="projects__descr">
          Проведение плановых технических обслуживаний на безмаслянных винтовых
          компрессорах ZR90VSD; ZR110VSD; COMPAIR D90 (замена сервисных наборов
          4000; 8000; 16000)
        </h4>
      </div>
      <ProjectSlider images={[ch1.src, ch2.src, ch3.src]} />
    </main>
  );
}
