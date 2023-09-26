import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className="wrap">
        <BreadCrumbs
          currentName="О компании"
          items={[{ link: "/", title: "Главная" }]}
        />
        <h1 className="title">О компании</h1>
      </section>
    </main>
  );
}
