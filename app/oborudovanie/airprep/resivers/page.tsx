import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import CatalogItem from "@/components/CatalogItem/CatalogItem";
import Filter from "@/components/Filter/Filter";
import Search from "@/components/Search/Search";
import testdata from "@/testData/res";

export default function Page() {
  return (
    <main>
      <section className="wrap">
        <BreadCrumbs
          currentName="Ресиверы"
          items={[
            { link: "/", title: "Главная" },
            { link: "/oborudovanie", title: "Оборудование" },
            { link: "/oborudovanie/airprep", title: "Воздухоподготовка" },
          ]}
        />
      </section>
      <section className="catalog wrap">
        <Search />
        <h1 className="title">РЕСИВЕРЫ</h1>
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
                min: 40.0,
                max: 40.0,
                value: { min: 40.0, max: 40.0 },
              },
              {
                id: "1",
                title: "Объем ресивера, л",
                type: "range",
                min: 1000.0,
                max: 1000.0,
                value: { min: 1000.0, max: 1000.0 },
              },
              {
                id: "11",
                title: "Газ",
                type: "checkbox",
                options: [{ title: "Воздух/азот", id: "1" }],
                value: [{ id: "1", isChecked: false }],
              },
              {
                id: "18",
                title: "Расположение",
                type: "checkbox",
                options: [{ title: "Вертикально", id: "1" }],
                value: [{ id: "1", isChecked: false }],
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
