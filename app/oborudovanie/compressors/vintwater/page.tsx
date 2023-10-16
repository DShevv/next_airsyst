import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import CatalogItem from "@/components/CatalogItem/CatalogItem";
import Filter from "@/components/Filter/Filter";
import Search from "@/components/Search/Search";
import testdata from "@/testData/vintwater";

export default function Page() {
  return (
    <main>
      <section className="wrap">
        <BreadCrumbs
          currentName="ВИНТОВЫЕ БЕЗМАСЛЯННЫЕ КОМПРЕССОРЫ С ВОДЯНОЙ СМАЗКОЙ"
          items={[
            { link: "/", title: "Главная" },
            { link: "/oborudovanie", title: "Оборудование" },
            { link: "/oborudovanie/compressors", title: "Компрессоры" },
          ]}
        />
      </section>
      <section className="catalog wrap">
        <Search />
        <h1 className="title">
          ВИНТОВЫЕ БЕЗМАСЛЯННЫЕ КОМПРЕССОРЫ С ВОДЯНОЙ СМАЗКОЙ
        </h1>
        <p>
          Серия безмасляных компрессоров с водяной смазкой серии ASFW от AIRSYST
          - это лучшее решение для пищевой и фармацевтической промышленности.
          Модельный ряд начинается с 7 кВт и заканчивается 55 кВт с
          производительностью до 10 м3/мин. Ресурс компрессоров этой серии более
          100 000 часов. Вы можете выбрать компрессоры из наличия или сделать
          заказ. Оцените качество 100% безмаслянного воздуха от AIRSYST.
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
                min: 7.0,
                max: 10.0,
                value: { min: 7.0, max: 10.0 },
              },
              {
                id: "power",
                title: "Мощность, кВт",
                type: "range",
                min: 15.0,
                max: 55.0,
                value: { min: 15.0, max: 55.0 },
              },
              {
                id: "voltage",
                title: "Напряжение (В)",
                type: "range",
                min: 400.0,
                max: 400.0,
                value: { min: 400.0, max: 400.0 },
              },
              {
                id: "pro",
                title: "Производительность, м³/мин",
                type: "range",
                min: 0,
                max: 0.0,
                value: { min: 0, max: 0.0 },
              },
              {
                id: "17",
                title: "Тип компрессора",
                type: "checkbox",
                options: [{ title: "Винтовой безмаслянный", id: "1" }],
                value: [{ id: "1", isChecked: false }],
              },
              {
                id: "18",
                title: "Тип привода",
                type: "checkbox",
                options: [{ title: "Прямой", id: "2" }],
                value: [{ id: "2", isChecked: false }],
              },
              {
                id: "18",
                title: "Тип смазки",
                type: "checkbox",
                options: [{ title: "Вода", id: "2" }],
                value: [{ id: "2", isChecked: false }],
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
