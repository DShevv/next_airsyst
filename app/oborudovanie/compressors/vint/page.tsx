import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
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
      </section>
    </main>
  );
}
