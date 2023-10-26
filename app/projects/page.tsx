"use client";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import SelectList from "@/components/SelectList/SelectList";
import Image from "next/image";
import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";

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

export default function Projects() {
  const [selection, setSelection] = useState("");
  const { data, isLoading } = useFetch<IProject[]>({
    endpoint: "projects/list",
  });

  const onSelect = (newSelection: string | undefined) => {
    if (newSelection !== undefined) {
      setSelection(newSelection);
    }
  };

  const all = () => {
    return (
      <div className="projects__items">
        {data &&
          data.map((project) => (
            <div key={project.id} className="projects__item">
              <div className="projects__preview">
                <Image
                  width={255}
                  height={300}
                  alt=""
                  src={"https://airsyst.kz/" + project.main_image_url}
                />
                <Image
                  width={100}
                  height={25}
                  alt=""
                  className="projects__manufacturer"
                  src={"https://airsyst.kz/" + project.manufacturer_image_url}
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
                <div className="projects__customer">{project.customer}</div>
                <div className="projects__name">{project.name}</div>
                <div className="projects__descr">{project.description}</div>
                <a href={"/projects/" + project.id} className="btn">
                  Подробнее
                </a>
              </div>
            </div>
          ))}
      </div>
    );
  };

  const sell = () => {
    return (
      <div className="projects__items">
        {data &&
          data
            .filter((project) => project.project_type === "sell")
            .map((project) => (
              <div key={project.id} className="projects__item">
                <div className="projects__preview">
                  <Image
                    width={255}
                    height={300}
                    alt=""
                    src={"https://airsyst.kz/" + project.main_image_url}
                  />
                  <Image
                    width={100}
                    height={25}
                    alt=""
                    className="projects__manufacturer"
                    src={"https://airsyst.kz/" + project.manufacturer_image_url}
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
                  <div className="projects__customer">{project.customer}</div>
                  <div className="projects__name">{project.name}</div>
                  <div className="projects__descr">{project.description}</div>
                  <a href={"/projects/" + project.id} className="btn">
                    Подробнее
                  </a>
                </div>
              </div>
            ))}
      </div>
    );
  };

  const repair = () => {
    return (
      <div className="projects__items">
        {data &&
          data
            .filter((project) => project.project_type === "repair")
            .map((project) => (
              <div key={project.id} className="projects__item">
                <div className="projects__preview">
                  <Image
                    width={255}
                    height={300}
                    alt=""
                    src={"https://airsyst.kz/" + project.main_image_url}
                  />
                  <Image
                    width={100}
                    height={25}
                    alt=""
                    className="projects__manufacturer"
                    src={"https://airsyst.kz/" + project.manufacturer_image_url}
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
                  <div className="projects__customer">{project.customer}</div>
                  <div className="projects__name">{project.name}</div>
                  <div className="projects__descr">{project.description}</div>
                  <a href={"/projects/" + project.id} className="btn">
                    Подробнее
                  </a>
                </div>
              </div>
            ))}
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
          {isLoading && "Loading..."}
          {selection === "" && all()}
          {selection === "repair" && repair()}
          {selection === "sell" && sell()}
        </div>
      </section>
    </main>
  );
}
