import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import EquipmentItem from "@/components/EquipmentItem/EquipmentItem";
import image from "@/public/img/images/Group_161.png";
import voz from "@/public/img/images/vozd.png";
import vozh from "@/public/img/images/vozdh.png";
import n2 from "@/public/img/images/n2.jpg";
import o2 from "@/public/img/images/o2.png";
import h2 from "@/public/img/images/h2.png";
import diesel from "@/public/img/images/diasel.jpg";
import centro from "@/public/img/images/centro.png";
import devair from "@/public/img/images/devair.png";

export default function Oborudovanie() {
  return (
    <main>
      <div className="wrap">
        <BreadCrumbs
          currentName="Оборудование"
          items={[{ link: "/", title: "Главная" }]}
        />
      </div>
      <section className="equipment wrap">
        <h1 className="title">Оборудование</h1>
        <div className="equipment__items">
          <EquipmentItem href="compressors" image={image} title="Компрессоры" />
          <EquipmentItem href="airprep" image={voz} title="Воздухоподготовка" />
          <EquipmentItem href="vozduh" image={vozh} title="Воздуходувки" />
          <EquipmentItem href="azote-gen" image={n2} title="Генераторы азота" />
          <EquipmentItem
            href="oxy-gen"
            image={o2}
            title="Генераторы кислорода"
          />
          <EquipmentItem
            href="hydro-gen"
            image={h2}
            title="Генераторы водорода"
          />
          <EquipmentItem
            href="compressors"
            image={diesel}
            title="Дизель генераторы"
          />
          <EquipmentItem
            href="cent-compr"
            image={centro}
            title="Центробежные компрессоры"
          />
          <EquipmentItem
            href="dev-air"
            image={devair}
            title="Установка разделения воздуха"
          />
        </div>
      </section>
    </main>
  );
}
