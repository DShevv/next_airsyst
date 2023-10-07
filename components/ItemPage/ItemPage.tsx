import React from "react";
import ItemSlider from "./ItemSlider/ItemSlider";
import ItemActions from "./ItemActions/ItemActions";
import TabsPanel from "../TabsPanel/TabsPanel";

interface Props {
  id: string;
  mainInfo: {
    title: string;
    art: string;
    price: string;
    shipment: string;
    garant: string;
    images: string[];
  };
  description: string;
  characteristics: { title: string; value: string }[];
}

export default function ItemPage({
  id,
  mainInfo,
  description,
  characteristics,
}: Props) {
  return (
    <section className="card wrap">
      <div className="card__top">
        <ItemSlider images={mainInfo.images} />
        <div className="card__info" product-id={id}>
          <h1 className="card__name">{mainInfo.title}</h1>
          <div className="card__art">Артикул: {mainInfo.art}</div>
          <ItemActions
            price={mainInfo.price}
            shipment={mainInfo.shipment}
            garant={mainInfo.garant}
          />
        </div>
      </div>
      <div className="card__specifications">
        <TabsPanel thumbs={["Характеристики", "Описание"]}>
          <>
            {characteristics.map((item, index) => (
              <div key={index} className="card__row">
                <div className="card__spec-name">{item.title}</div>
                <div className="card__value">{item.value}</div>
              </div>
            ))}
          </>
          <div
            className="card__text"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </TabsPanel>
      </div>
    </section>
  );
}
