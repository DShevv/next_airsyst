import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import CatalogItem from "@/components/CatalogItem/CatalogItem";
import Filter from "@/components/Filter/Filter";
import Search from "@/components/Search/Search";
import testdata from "@/testData/coal";

export default function Page() {
  return (
    <main>
      <section className="wrap">
        <BreadCrumbs
          currentName="Угольные колонны"
          items={[
            { link: "/", title: "Главная" },
            { link: "/oborudovanie", title: "Оборудование" },
            { link: "/oborudovanie/airprep", title: "Воздухоподготовка" },
          ]}
        />
      </section>
      <section className="catalog wrap">
        <Search />
        <h1 className="title">УГОЛЬНЫЕ КОЛОНЫ</h1>
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
                title: "Рабочее давление",
                type: "checkbox",
                options: [
                  { title: "16", id: "1" },
                  { title: "40", id: "2" },
                ],
                value: [
                  { id: "1", isChecked: false },
                  { id: "2", isChecked: false },
                ],
              },
              {
                id: "1",
                title: "Соединение",
                type: "checkbox",
                options: [
                  { title: "1", id: "1" },
                  { title: "1-1/2", id: "2" },
                  { title: "2", id: "3" },
                  { title: "2-1/2", id: "4" },
                  { title: "DN 100", id: "5" },
                  { title: "DN 150", id: "6" },
                  { title: "DN 200", id: "7" },
                  { title: "DN 80", id: "8" },
                ],
                value: [
                  { id: "1", isChecked: false },
                  { id: "2", isChecked: false },
                  { id: "3", isChecked: false },
                  { id: "4", isChecked: false },
                  { id: "5", isChecked: false },
                  { id: "6", isChecked: false },
                  { id: "7", isChecked: false },
                  { id: "8", isChecked: false },
                ],
              },
              {
                id: "2",
                title: "Производительность м3/мин",
                type: "checkbox",
                options: [
                  { title: "105", id: "1" },
                  { title: "11", id: "2" },
                  { title: "120", id: "3" },
                  { title: "146", id: "4" },
                  { title: "16.3", id: "5" },
                  { title: "180", id: "6" },
                  { title: "25", id: "7" },
                  { title: "3", id: "8" },
                  { title: "36.2", id: "9" },
                  { title: "5", id: "10" },
                  { title: "53.3", id: "11" },
                  { title: "60", id: "12" },
                  { title: "7.2", id: "13" },
                  { title: "73", id: "14" },
                  { title: "83", id: "15" },
                ],
                value: [
                  { id: "1", isChecked: false },
                  { id: "2", isChecked: false },
                  { id: "3", isChecked: false },
                  { id: "4", isChecked: false },
                  { id: "5", isChecked: false },
                  { id: "6", isChecked: false },
                  { id: "7", isChecked: false },
                  { id: "8", isChecked: false },
                  { id: "9", isChecked: false },
                  { id: "10", isChecked: false },
                  { id: "11", isChecked: false },
                  { id: "12", isChecked: false },
                  { id: "13", isChecked: false },
                  { id: "14", isChecked: false },
                  { id: "15", isChecked: false },
                ],
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
