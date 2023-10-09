import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Filter from "@/components/Filter/Filter";
import Search from "@/components/Search/Search";

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
            ]}
          />
          <div className="catalog__items"></div>
        </div>
      </section>
    </main>
  );
}
