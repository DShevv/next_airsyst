import ProductItem from "./ProductItem";
import obrImage from "../../public/img/images/main-eq.png";
import sevice from "../../public/img/images/bid-2.png";
import parts from "../../public/img/images/bid-1.png";
import { fetchData } from "@/utils/fetchData";

interface ICompanies {
  equipment: string[];
  service: string[];
  parts: string[];
}

export default async function Products() {
  const companies: ICompanies = (await fetchData<ICompanies>({
    endpoint: "brands/list/frontpage",
  })) as ICompanies;

  return (
    <section className="bid wrap">
      <div className="bid__items">
        <ProductItem
          title="Оборудование"
          image={obrImage}
          href="/oborudovanie"
          companies={companies && companies.equipment}
        />
        <ProductItem
          title="Сервис и обслуживание"
          image={sevice}
          href="/service-center"
          companies={companies && companies.service}
        />
        <ProductItem
          title="ЗАПЧАСТИ И РАСХОДНЫЕ МАТЕРИАЛЫ ДЛЯ КОМПРЕССОРОВ"
          image={parts}
          href="/parts"
          companies={companies && companies.parts}
        />
      </div>
    </section>
  );
}
