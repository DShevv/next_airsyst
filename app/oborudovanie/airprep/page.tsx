import AirItem from "@/components/AirItem/AirItem";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import image from "@/public/img/images/Group_217.png";

export default function AirPrep() {
  return (
    <main>
      <div className="wrap">
        <BreadCrumbs
          currentName="Воздухоподготовка"
          items={[
            { link: "/", title: "Главная" },
            { link: "/oborudovanie", title: "Оборудование" },
          ]}
        />
      </div>
      <section className="air wrap">
        <h1 className="title">Воздухоподготовка</h1>

        <div className="air__items">
          <AirItem href="resivers" title="Ресиверы" image={image} />
          <AirItem href="coat-columns" title="Угольные колоны" image={image} />
        </div>
      </section>
    </main>
  );
}
