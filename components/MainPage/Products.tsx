import ProductItem from "./ProductItem";
import obrImage from "../../public/img/images/main-eq.png";
import sevice from "../../public/img/images/bid-2.png";
import airsyst from "../../public/img/images/airsyst.svg";

const companiess = [airsyst, airsyst, airsyst, airsyst, airsyst, airsyst];

export default function Products() {
  return (
    <section className="bid wrap">
      <div className="bid__items">
        <ProductItem
          title="Оборудование"
          image={obrImage}
          href="/oborudovanie"
          companies={companiess}
        />
        <ProductItem
          title="Сервис и обслуживание"
          image={sevice}
          href="/service-center"
          companies={companiess}
        />
        <ProductItem
          title="ЗАПЧАСТИ И РАСХОДНЫЕ МАТЕРИАЛЫ ДЛЯ КОМПРЕССОРОВ"
          image={obrImage}
          href="/oborudovanie"
          companies={companiess}
        />
      </div>
    </section>
  );
}
