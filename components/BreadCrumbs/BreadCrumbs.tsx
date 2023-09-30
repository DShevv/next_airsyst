import Link from "next/link";
import styles from "./styles.module.css";

interface Props {
  currentName: string;
  items: { title: string; link: string }[];
}

export default function BreadCrumbs({ currentName, items }: Props) {
  return (
    <div className={styles.container}>
      {items.map((elem) => (
        <Link className={styles.link} key={elem.link} href={elem.link}>
          {elem.title} /{" "}
        </Link>
      ))}
      <span className={styles.current}> {currentName}</span>
    </div>
  );
}
