import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import CatalogItem from "@/components/CatalogItem/CatalogItem";
import Filter from "@/components/Filter/Filter";
import Search from "@/components/Search/Search";
import testdata from "@/testData/vint";

export default function Page() {
  return (
    <main>
      <section className="wrap">
        <BreadCrumbs
          currentName="Винтовые маслосмазываемые компрессоры"
          items={[
            { link: "/", title: "Главная" },
            { link: "/oborudovanie", title: "Оборудование" },
            { link: "/oborudovanie/compressors", title: "Компрессоры" },
          ]}
        />
      </section>
      <section className="catalog wrap">
        <Search />
        <h1 className="title">Винтовые маслосмазываемые компрессоры</h1>
        <p>
          Винтовые маслосмазываемые компрессоры AIRSYST&nbsp; производятся из
          европейских комплектующих. Винтовые блоки до 75 кВт мы производим на
          нашем заводе. Блоки свыше 75кВт производятся в Германии. Модельный ряд
          компрессоров начинается с 4 кВт и заканчивается 315 кВт. Мы предлагаем
          оценить наши цены и качество. Гарантия на оборудование до 10 лет,
          при&nbsp; условии заключения сервисного договора.
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
              {
                id: "12",
                title: "Класс защиты электрооборудования, IP",
                type: "checkbox",
                options: [
                  { title: "IP 66", id: "1" },
                  { title: "IP 55", id: "2" },
                ],
                value: [
                  { id: "1", isChecked: false },
                  { id: "2", isChecked: false },
                ],
              },
              {
                id: "power",
                title: "Мощность, кВт",
                type: "range",
                min: 4.0,
                max: 250.0,
                value: { min: 4.0, max: 250.0 },
              },
              {
                id: "voltage",
                title: "Напряжение (В)",
                type: "range",
                min: 380.0,
                max: 380.0,
                value: { min: 380.0, max: 380.0 },
              },
              {
                id: "13",
                title: "Осушитель воздуха",
                type: "checkbox",
                options: [{ title: "Да", id: "1" }],
                value: [{ id: "1", isChecked: false }],
              },
              {
                id: "14",
                title: "Питание",
                type: "checkbox",
                options: [{ title: "380В", id: "1" }],
                value: [{ id: "1", isChecked: false }],
              },
              {
                id: "pro",
                title: "Производительность, м³/мин",
                type: "range",
                min: 0.4,
                max: 70.0,
                value: { min: 0.4, max: 70.0 },
              },
              {
                id: "15",
                title: "Рессивер",
                type: "checkbox",
                options: [
                  { title: "200 литров", id: "1" },
                  { title: "500 литров", id: "2" },
                ],
                value: [
                  { id: "1", isChecked: false },
                  { id: "2", isChecked: false },
                ],
              },
              {
                id: "16",
                title: "Тип",
                type: "checkbox",
                options: [{ title: "Для лазерной резки", id: "1" }],
                value: [{ id: "1", isChecked: false }],
              },
              {
                id: "17",
                title: "Тип компрессора",
                type: "checkbox",
                options: [{ title: "Винтовой маслосмазываемый", id: "1" }],
                value: [{ id: "1", isChecked: false }],
              },
              {
                id: "18",
                title: "Тип привода",
                type: "checkbox",
                options: [
                  { title: "Ременной", id: "1" },
                  { title: "Ременной", id: "2" },
                ],
                value: [
                  { id: "1", isChecked: false },
                  { id: "2", isChecked: false },
                ],
              },
              {
                id: "dec",
                title: "Уровень шума, Дб",
                type: "range",
                min: 69,
                max: 76,
                value: { min: 69, max: 76.0 },
              },
              {
                id: "20",
                title: "Частотный преобразователь",
                type: "checkbox",
                options: [{ title: "Да", id: "1" }],
                value: [{ id: "1", isChecked: false }],
              },
              {
                id: "21",
                title: "Электродвигатель на магнитах",
                type: "checkbox",
                options: [{ title: "Да", id: "1" }],
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
