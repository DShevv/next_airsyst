import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import EquipmentItem from "@/components/EquipmentItem/EquipmentItem";
import image from "@/public/img/images/Group_161.png";

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
          <EquipmentItem
            href="airprep"
            image={image}
            title="Воздухоподготовка"
          />
          <EquipmentItem href="compressors" image={image} title="Компрессоры" />
          <EquipmentItem
            href="azote-gen"
            image={image}
            title="Генераторы азота"
          />
          <EquipmentItem
            href="oxy-gen"
            image={image}
            title="Генераторы кислорода"
          />
          <EquipmentItem
            href="hydro-gen"
            image={image}
            title="Генераторы водорода"
          />
          <EquipmentItem href="compressors" image={image} title="Компрессоры" />
          <EquipmentItem
            href="cent-compr"
            image={image}
            title="Центробежные компрессоры"
          />
          <EquipmentItem
            href="dev-air"
            image={image}
            title="Установка разделения воздуха"
          />
        </div>
      </section>
    </main>
  );
}
