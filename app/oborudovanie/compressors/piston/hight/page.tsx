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
          currentName="Высокое давление"
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
        <h1 className="title">ПОРШНЕВЫЕ КОМПРЕССОРЫ ВЫСОКОГО ДАВЛЕНИЯ</h1>
        <p>
          Поршневые компрессора высокого давления - эффективное и функциональное
          устройство, предназначенное для сжатия атмосферного давления и
          дальнейшего направления потока воздуха в пневмоустройства.
        </p>
        <div className="catalog__content">
          <div className="catalog__empty">Тут пока пусто :(</div>
        </div>
        <p></p>
        <p>
          Такое оборудование является обязательным компонентом пневматических
          систем различного назначения. Для крупных объектов устройство обладает
          повышенной мощностью и дополнительным функционалом. В зависимости от
          типа действия оборудования, различают промышленный компрессор высокого
          давления поршневой, винтовой и спиральный.
        </p>
        <p>
          Выбирая конкретную модель устройства, важно обратить внимание на такие
          параметры, как объем ресивера, наличие осушителя, источник питания и
          наличие частотного преобразователя.
        </p>
        <p>
          Для того, чтобы купить поршневой компрессор высокого давления,
          достаточно обратиться в интернет-магазин - в числе преимуществ низкая
          цена благодаря прямым контрактам с производителями, лояльная форма
          оплаты, удобная и быстрая доставка. На каждый элемент предоставляется
          гарантия, в зависимости от бренда.
        </p>
      </section>
    </main>
  );
}
