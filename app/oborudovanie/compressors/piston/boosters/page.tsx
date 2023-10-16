import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import CatalogItem from "@/components/CatalogItem/CatalogItem";
import Filter from "@/components/Filter/Filter";
import Search from "@/components/Search/Search";
import testdata from "@/testData/boosters";

export default function Page() {
  return (
    <main>
      <section className="wrap">
        <BreadCrumbs
          currentName="Бустеры"
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
        <h1 className="title">БУСТЕРЫ</h1>
        <p>
          Для повышения давления в пневматческой системе используются бустеры
          или дожимные компрессоры. AIRSYST производит дожимные компрессоры для
          воздуха, кислорода, азота. Поставки из наличия. Высокое качество.
          Низкие цены.
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
                title: "Давление на входе (бар)",
                type: "checkbox",
                options: [{ title: "7/10/13", id: "1" }],
                value: [{ id: "1", isChecked: false }],
              },
              {
                id: "2",
                title: "Давление на выходе (бар)",
                type: "checkbox",
                options: [{ title: "40", id: "1" }],
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
                min: 22.0,
                max: 30.0,
                value: { min: 22.0, max: 30.0 },
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
                  { title: "4,5/6,5/8,4", id: "1" },
                  { title: "5,8/8,0/10,4", id: "2" },
                ],
                value: [
                  { id: "1", isChecked: false },
                  { id: "2", isChecked: false },
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
          Под брендом AIRSYST выпускаются дожимные компрессоры - бустеры
          различных газов и их смесей. На рынке компрессорного оборудования
          бустеры занимают устойчивую позицию. Многократно увеличенное давление
          газа обеспечивает напором широкий ряд пневматической аппаратуры.
        </p>
        <p>
          Бустерные компрессоры относятся к поршневым насосам высокого давления.
          Дожимными они называются потому, что используются на второй ступени
          сжатия газов. При их эксплуатации стоит учитывать несколько
          особенностей:
        </p>
        <ul>
          <li>
            Дают возможность локального сжатия на отдельных производственных
            участках;
          </li>
          <li>Требуют постоянного охлаждения;</li>
          <li>Могут размещаться на любой ровной поверхности.</li>
          <li>
            Не нуждаются в дополнительной очистке и осушении поступающего газа.
          </li>
        </ul>
        <p>
          Производятся компрессоры высокого давления из материалов повышенной
          прочности. Это обеспечивает долгий срок службы и безопасность.
        </p>
        <p>Основными преимуществами бустеров AIRSYST стали:</p>
        <ul>
          <li>Автоматика с эффективной системой защиты;</li>
          <li>Цены от производителей;</li>
          <li>Доставка по РФ, Азии, Европе.</li>
        </ul>
        <p>
          Если вы не уверены, какая модель бустера предпочтительней, свяжитесь
          со специалистами компании, и они помогут подобрать оптимальный
          вариант.
        </p>
        <p></p>
      </section>
    </main>
  );
}
