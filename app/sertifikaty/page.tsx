import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import styles from "./page.module.css";
import SertifikatesSlider from "@/components/SertifikatesSlider";

export default function Certificates() {
  return (
    <main>
      <div className="wrap">
        <BreadCrumbs
          currentName="Сертификаты"
          items={[{ link: "/", title: "Главная" }]}
        />
      </div>
      <section className="projects wrap cerf">
        <h1 className="title">СЕРТИФИКАТЫ</h1>
        <h3 className="certificates__descr">
          Наша компания имеет статус официального дилера. Этот факт гарантирует
          наличие квалифицированной выездной технической поддержки и сервисного
          центра, выполнение гарантийного и послегарантийного обслуживания.
          Прямые контракты с заводами производителями подтверждают качество,
          легальность и минимальную стоимость продукта.
        </h3>
        <SertifikatesSlider />
      </section>
    </main>
  );
}
