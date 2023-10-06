import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

export default function Project() {
  return (
    <main>
      <div className="wrap">
        <BreadCrumbs
          currentName="Наши проекты"
          items={[
            { link: "/", title: "Главная" },
            { link: "/projects", title: "Наши проекты" },
          ]}
        />
      </div>
      <section className="projects wrap"></section>
    </main>
  );
}
