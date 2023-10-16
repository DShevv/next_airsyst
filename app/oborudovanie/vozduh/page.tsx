import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Filter from "@/components/Filter/Filter";
import Search from "@/components/Search/Search";
import React from "react";
import testdata from "@/testData/voz";
import CatalogItem from "@/components/CatalogItem/CatalogItem";

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
                id: "1",
                title: "Давление (мбар)",
                type: "checkbox",
                options: [{ title: "750-1 000", id: "1" }],
                value: [{ id: "1", isChecked: false }],
              },
              {
                id: "2",
                title: "Питание",
                type: "checkbox",
                options: [{ title: "380В", id: "1" }],
                value: [{ id: "1", isChecked: false }],
              },
              {
                id: "3",
                title: "Привод",
                type: "checkbox",
                options: [{ title: "Ременной", id: "1" }],
                value: [{ id: "1", isChecked: false }],
              },
              {
                id: "4",
                title: "Производительность, м³/мин",
                type: "range",
                min: 0,
                max: 0,
                value: { min: 0, max: 0 },
              },
              {
                id: "5",
                title: "Уровень шума, Дб",
                type: "range",
                min: 0,
                max: 0,
                value: { min: 0, max: 0 },
              },
              {
                id: "6",
                title: "Частота тока, Гц",
                type: "range",
                min: 50,
                max: 50,
                value: { min: 50, max: 50 },
              },
            ]}
          />
          <div className="catalog__items">
            {testdata.map((item) => (
              <CatalogItem key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
