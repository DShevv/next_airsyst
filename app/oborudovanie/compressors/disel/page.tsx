import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import CatalogItem from "@/components/CatalogItem/CatalogItem";
import Filter from "@/components/Filter/Filter";
import Search from "@/components/Search/Search";
import testdata from "@/testData/disel";

export default function Page() {
  return (
    <main>
      <section className="wrap">
        <BreadCrumbs
          currentName="ПЕРЕДВИЖНЫЕ ДИЗЕЛЬНЫЕ КОМПРЕССОРЫ"
          items={[
            { link: "/", title: "Главная" },
            { link: "/oborudovanie", title: "Оборудование" },
            { link: "/oborudovanie/compressors", title: "Компрессоры" },
          ]}
        />
      </section>
      <section className="catalog wrap">
        <Search />
        <h1 className="title">ПЕРЕДВИЖНЫЕ ДИЗЕЛЬНЫЕ КОМПРЕССОРЫ</h1>
        <p>
          Группа компаний AIRSYST - это производитель компрессорного
          оборудования. Серия передвижных дизельных компрессоров DAS - это
          оборудование, которое зарекомендовало себя как надежные компрессоры по
          оптимальной цене. Мы производим как обычные компрессоры с рабочим
          давлением до 10 бар и производительностью 10 м3/мин, так машины с
          рабочим давлением до 35 бар и производительностью до 33 м3/мин. Мы
          используем силовые установки Perkins, Cummins.
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
                min: 8.0,
                max: 35.0,
                value: { min: 8.0, max: 35.0 },
              },
              {
                id: "99",
                title: "Дизельный двигатель",
                type: "checkbox",
                options: [
                  { title: "Cummins", id: "1" },
                  { title: "Perkins/Deutz", id: "2" },
                  { title: "Perkins/Kubota", id: "3" }
                ],
                value: [
                  { id: "1", isChecked: false },
                  { id: "2", isChecked: false },
                  { id: "3", isChecked: false },
                ],
              },
              {
                id: "11",
                title: "Класс защиты электрооборудования, IP",
                type: "checkbox",
                options: [{ title: "IP 66", id: "1" }],
                value: [{ id: "1", isChecked: false }],
              },
              {
                id: "10",
                title: "Мощность (л.с.)",
                type: "checkbox",
                options: [
                  { title: "160", id: "1" },
                  { title: "180", id: "2" },
                  { title: "30", id: "3" },
                  { title: "310", id: "4" },
                  { title: "850", id: "5" },
                  { title: "750", id: "6" },
                  { title: "55", id: "7" },
                ],
                value: [
                  { id: "1", isChecked: false },
                  { id: "2", isChecked: false },
                  { id: "3", isChecked: false },
                  { id: "4", isChecked: false },
                  { id: "5", isChecked: false },
                  { id: "6", isChecked: false },
                  { id: "7", isChecked: false },
                ],
              },

              {
                id: "pro",
                title: "Производительность, м³/мин",
                type: "range",
                min: 3,
                max: 33.0,
                value: { min: 3, max: 33.0 },
              },
              {
                id: "17",
                title: "Тип компрессора",
                type: "checkbox",
                options: [{ title: "Дизельный передвижной", id: "1" }],
                value: [{ id: "1", isChecked: false }],
              },
              {
                id: "18",
                title: "Тип привода",
                type: "checkbox",
                options: [{ title: "Прямой", id: "1" }],
                value: [{ id: "1", isChecked: false }],
              },
              {
                id: "db",
                title: "Уровень шума, Дб",
                type: "range",
                min: 69,
                max: 69.0,
                value: { min: 69, max: 69.0 },
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
