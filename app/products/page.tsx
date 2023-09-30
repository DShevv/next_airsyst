import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Products from "@/components/MainPage/Products";

export default function Projects() {
  return (
    <main>
      <div className="wrap">
        <BreadCrumbs
          currentName="Наши продукты"
          items={[{ link: "/", title: "Главная" }]}
        />
      </div>
      <section className="projects wrap">
        <h1 className="title">Наши продукты</h1>
        <Products />
      </section>
    </main>
  );
}
