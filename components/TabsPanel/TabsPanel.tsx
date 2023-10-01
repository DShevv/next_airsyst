"use client";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode[] | ReactNode;
  thumbs: string[];
}

export default function TabsPanel({ children, thumbs }: Props) {
  const [active, setActive] = useState(0);

  return (
    <section className="page-gen-spec wrap">
      <div className="card__specification">
        <div className="card__thumbs">
          {thumbs.map((elem, index) => (
            <div
              key={index}
              className={`card__thumb ${active === index && "active"}`}
              onClick={() => {
                setActive(index);
              }}
            >
              {elem}
            </div>
          ))}
        </div>
        <div className="card__items">
          {Array.isArray(children) ? (
            children.map((elem, index) => (
              <div
                className={`card__item ${active === index && "active"}`}
                key={index}
              >
                {elem}
              </div>
            ))
          ) : (
            <div className="card__item active">children</div>
          )}
        </div>
      </div>
    </section>
  );
}
