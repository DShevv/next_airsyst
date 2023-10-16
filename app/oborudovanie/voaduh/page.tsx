import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Filter from "@/components/Filter/Filter";
import Search from "@/components/Search/Search";
import React from "react";

export default function Page() {
  return (
    <main>
      <section className="wrap">
        <BreadCrumbs
          currentName="Воздуходувки"
          items={[
            { link: "/", title: "Главная" },
            { link: "/oborudovanie", title: "Оборудование" },
          ]}
        />
      </section>
      <section className="catalog wrap">
        <Search />
        <h1 className="title">Воздуходувки</h1>
        <p>
          Роторные воздуходувки Рутса от AIRSYST производятся на нашем заводе в
          Стамбуле (Турецкая Республика). Мы предлагаем премиальное качество по
          оптимальной цене. Модельный ряд включает в себя машины мощьностью от 5
          до 350 кВт. 100% безмаслянный воздух от AIRSYST. Наша компания
          использует только европейские комплектующие.
        </p>
        <div className="catalog__content">
          <Filter
            filters={[
              {
                id: "brand",
                title: "Бренды",
                type: "checkbox",
                options: [{ title: "Airsyst", id: "1" }],
                value: [{ id: "1", isChecked: false }],
              },
              {
                id: "pressure",
                title: "Давление (бар)",
                type: "range",
                min: 2.0,
                max: 40.0,
                value: { min: 2.0, max: 40.0 },
              },
            ]}
          />
          <div className="catalog__items"></div>
        </div>
      </section>
    </main>
  );
}
