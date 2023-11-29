import React from "react";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ProjectSlider from "@/components/ProjectSlider/ProjectSlider";
import { fetchData } from "@/utils/fetchData";
import { getMonthString } from "@/utils/getMonthString";

interface IProject {
  name: string;
  customer: string;
  description: string;
  project_date: string;
  project_type: string;
  id: number;
  main_image_url: string;
  manufacturer_image_url: string;
  image_urls: [
    {
      url: string;
    }
  ];
}

export const generateStaticParams = async () => {
  const data = await fetchData<IProject[]>({ endpoint: "projects/list" });
  if (data) {
    return data && data.map((elem) => ({ id: elem.id.toString() }));
  }
  return [];
};

export default async function ProjectPage(props: any) {
  const product = await fetchData<IProject>({
    endpoint: `projects/${props.params.id}`,
  });
  const date = product?.project_date.split("-");

  return (
    product && (
      <main>
        <div className="wrap">
          <BreadCrumbs
            currentName={product.customer}
            items={[
              { link: "/", title: "Главная" },
              { link: "/projects", title: "Наши проекты" },
            ]}
          />
        </div>
        <div className="projects wrap">
          <h1 className="title">Наши проекты</h1>
          <div className="projects__date">
            <div className="projects__day">{date && date[2]}</div>
            <div className="project__small-date">
              <div className="projects__month">
                {date && getMonthString(date[1])}
              </div>
              <div className="projects__year">{date && date[0]}</div>
            </div>
          </div>
          <h3 className="projects__customer">{product.customer}</h3>
          <h3 className="projects__name">{product.name}</h3>
          <h4 className="projects__descr">{product.description}</h4>
        </div>
        <ProjectSlider images={product.image_urls.map((elem) => elem.url)} />
      </main>
    )
  );
}
