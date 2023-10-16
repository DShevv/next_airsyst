import ProductItem from "./ProductItem";
import obrImage from "../../public/img/images/main-eq.png";
import sevice from "../../public/img/images/bid-2.png";
import parts from "../../public/img/images/bid-1.png";
import airsyst from "../../public/img/images/airsyst.svg";
import comp from "@/public/img/images/comp.svg";
import comp1 from "@/public/img/images/comp1.svg";
import comp2 from "@/public/img/images/comp3.svg";
import comp3 from "@/public/img/images/comp4.svg";
import comp4 from "@/public/img/images/comp5.svg";
import comp5 from "@/public/img/images/comp6.svg";
import comp6 from "@/public/img/images/comp7.svg";
import comp7 from "@/public/img/images/comp2.svg";

const airsysts = [airsyst, airsyst, airsyst, airsyst, airsyst, airsyst];
const companies = [
  comp,
  comp1,
  comp2,
  comp3,
  comp4,
  comp5,
  comp6,
  comp7,
  airsyst,
];

export default function Products() {
  return (
    <section className="bid wrap">
      <div className="bid__items">
        <ProductItem
          title="Оборудование"
          image={obrImage}
          href="/oborudovanie"
          companies={airsysts}
        />
        <ProductItem
          title="Сервис и обслуживание"
          image={sevice}
          href="/service-center"
          companies={companies}
        />
        <ProductItem
          title="ЗАПЧАСТИ И РАСХОДНЫЕ МАТЕРИАЛЫ ДЛЯ КОМПРЕССОРОВ"
          image={parts}
          href="/parts"
          companies={companies}
        />
      </div>
    </section>
  );
}
