import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import CatalogItem from "@/components/CatalogItem/CatalogItem";
import Filter from "@/components/Filter/Filter";
import Search from "@/components/Search/Search";
import testdata from "@/testData/vintbez";

export default function Page() {
  return (
    <main>
      <section className="wrap">
        <BreadCrumbs
          currentName="ВИНТОВЫЕ БЕЗМАСЛЯННЫЕ КОМПРЕССОРЫ СУХОГО ТИПА"
          items={[
            { link: "/", title: "Главная" },
            { link: "/oborudovanie", title: "Оборудование" },
            { link: "/oborudovanie/compressors", title: "Компрессоры" },
          ]}
        />
      </section>
      <section className="catalog wrap">
        <Search />
        <h1 className="title">ВИНТОВЫЕ БЕЗМАСЛЯННЫЕ КОМПРЕССОРЫ СУХОГО ТИПА</h1>
        <p>
          Компания AIRSYST представляет Вам серию винтовых безмасляных
          компрессоров сухого типа ASF. Линейка оборудования начинается от 45
          кВт и заканчивается 250 кВт. В модельном ряду присутствуют компрессоры
          низкого давления 2-3 бар, с максимальной производительностью до 84
          м3/мин. Ступени сжатия изготовлены из нержавеющей стали и покрыты
          защитным слоем, обеспечивающим наработку не менее 100 000 часов.
          Гидравлический впусконой клапан, обеспечивает безотказную работу на
          протяжении всего срока службы компрессора. Отправьте нма запрос и
          получите лучшее предложение по цене.
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
                max: 10.0,
                value: { min: 2.0, max: 10.0 },
              },
              {
                id: "12",
                title: "Класс защиты электрооборудования, IP",
                type: "checkbox",
                options: [{ title: "IP 55", id: "2" }],
                value: [{ id: "2", isChecked: false }],
              },
              {
                id: "power",
                title: "Мощность, кВт",
                type: "range",
                min: 45.0,
                max: 250.0,
                value: { min: 45.0, max: 250.0 },
              },
              {
                id: "voltage",
                title: "Напряжение (В)",
                type: "range",
                min: 0.0,
                max: 0.0,
                value: { min: 0.0, max: 0.0 },
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
                id: "dec",
                title: "Уровень шума, Дб",
                type: "range",
                min: 76,
                max: 82,
                value: { min: 76, max: 82.0 },
              },
              {
                id: "20",
                title: "Частотный преобразователь",
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
