import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import CatalogItem from "@/components/CatalogItem/CatalogItem";
import Filter from "@/components/Filter/Filter";
import Search from "@/components/Search/Search";
import testdata from "@/testData/mebium";

export default function Page() {
  return (
    <main>
      <section className="wrap">
        <BreadCrumbs
          currentName="Среднее давление"
          items={[
            { link: "/", title: "Главная" },
            { link: "/oborudovanie", title: "Оборудование" },
            { link: "/oborudovanie/compressors", title: "Компрессоры" },
            {
              link: "/oborudovanie/compressors/piston",
              title: "Поршневые компрессоры",
            },
          ]}
        />
      </section>
      <section className="catalog wrap">
        <Search />
        <h1 className="title">ПОРШНЕВЫЕ КОМПРЕССОРЫ СРЕДНЕГО ДАВЛЕНИЯ</h1>
        <p>
          Поршневые компрессора - специальные устройства, предназначенные для
          сжатия воздуха в различных сферах деятельности, в том числе на
          производстве. Их разделяют по создаваемому давлению - есть приборы
          низкого, среднего, высокого и ультравысокого давления, у каждого из
          них - своё назначение
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
                min: 11.0,
                max: 18.5,
                value: { min: 11.0, max: 18.5 },
              },
              {
                id: "1",
                title: "Рабочее давление (бар)",
                type: "checkbox",
                options: [{ title: "10/30/40", id: "2" }],
                value: [{ id: "2", isChecked: false }],
              },
              {
                id: "17",
                title: "Тип компрессора",
                type: "checkbox",
                options: [{ title: "Поршневой маслосмазываемый", id: "1" }],
                value: [{ id: "1", isChecked: false }],
              },
              {
                id: "18",
                title: "Производительность м3/мин",
                type: "checkbox",
                options: [
                  { title: "0,8/0,6/-", id: "1" },
                  { title: "1,9/1,8/1,6", id: "2" },
                  { title: "2,1/1,8/1,6", id: "3" },
                ],
                value: [
                  { id: "1", isChecked: false },
                  { id: "2", isChecked: false },
                  { id: "3", isChecked: false },
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
        <p></p>
        <p>
          Поршневые компрессора среднего давления обеспечивают конечное давление
          от 1 до 10 МПа, при этом отличаются отличной производительностью и
          сравнительно невысоким уровнем шумовой нагрузки. Выбирают оптимальную
          модель такого прибора по параметрам:
        </p>
        <ul>
          <li>по числу поршней;</li>
          <li>по типу привода - он может быть ременным и прямым;</li>
          <li>
            по расположению цилиндров можно подобрать горизонтальные,
            вертикальные и угловые;
          </li>
          <li>
            по источнику питания - электрические, дизельные либо бензиновые.
          </li>
        </ul>
        <p>
          Выбрать и купить оптимальное оборудование можно в нашей компании. У
          нас лучшая цена на качественные устройства и самые лояльные условия
          приобретения.
        </p>
      </section>
    </main>
  );
}
