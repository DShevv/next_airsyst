import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import styles from "./page.module.css";
import SelectList from "@/components/SelectList/SelectList";
import Image from "next/image";
import air from "../../public/img/images/airsyst.svg";
import volk from "../../public/img/images/ВКМК.jpg";

export default function Contacts() {
  return (
    <main>
      <div className="wrap">
        <BreadCrumbs
          currentName="Контакты"
          items={[{ link: "/", title: "Главная" }]}
        />
      </div>
      <section className="contacts-page wrap">
        <h1 className="title">Контакты</h1>

        <div className="contacts-page__items">
          <div className="contacts-page__item">
            <div className="contacts-page__country">Турецкая Республика:</div>
            <div className="contacts-page__content">
              <p>AERO ENDÜSTRİ</p>
              <p>Emek, Sivat Cd., 34785 Sancaktepe/İstanbul, Турция</p>
              <p>
                <strong>
                  <a href="tel:+905378572301">+90 537 857 23 01</a>
                </strong>
              </p>
              <p>
                <a href="mailto:info@airsyst.eu">info@airsyst.eu</a>
              </p>
              <p>
                <a href="https://airsyst.eu">https://airsyst.eu</a>
              </p>
            </div>
          </div>

          <div className="contacts-page__item">
            <div className="contacts-page__country">Эстония:</div>
            <div className="contacts-page__content">
              <p>AIRSYST OU</p>
              <p>Ahtri 12, 10151 Tallinn, Эстония</p>
              <p>
                <strong>
                  <a href="tel:+3726104254">+372 610 42 54</a>
                </strong>
              </p>
              <p>
                <a href="mailto:info@airsyst.eu">info@airsyst.eu</a>
              </p>
              <p>
                <a href="https://airsyst.eu">https://airsyst.eu</a>
              </p>
            </div>
          </div>

          <div className="contacts-page__item">
            <div className="contacts-page__country">Ирландия:</div>
            <div className="contacts-page__content">
              <p>AIRSYST OU</p>
              <p>Thurles, Co. Tipperary, Ирландия</p>
              <p>
                <strong>
                  <a href="tel:+353852593858">+353 852 59 38 58</a>
                </strong>
              </p>
              <p>
                <a href="mailto:info@airsyst.eu">info@airsyst.eu</a>
              </p>
              <p>
                <a href="https://airsyst.eu">https://airsyst.eu</a>
              </p>
            </div>
          </div>

          <div className="contacts-page__item">
            <div className="contacts-page__country">Российская Федерация:</div>
            <div className="contacts-page__content">
              <p>ООО “Эир Сист Рус”</p>
              <p>г. Смоленск, ул. Большая Советская 16/17, РФ</p>
              <p>
                <strong>
                  <a href="tel:+79213959229">+7 921 395 92 29</a>
                </strong>
              </p>
              <p>
                <a href="mailto:info@airsyst.ru">info@airsyst.ru</a>
              </p>
              <p>
                <a href="https://airsyst.ru">https://airsyst.ru</a>
              </p>
            </div>
          </div>

          <div className="contacts-page__item">
            <div className="contacts-page__country">Республика Беларусь:</div>
            <div className="contacts-page__content">
              <p>ООО “БелТехЛайн”</p>
              <p>г. Минск, пер. С. Ковалевской 60, Беларусь</p>
              <p>
                <strong>
                  <a href="tel:+375333850568">+375 33 385 05 68</a>
                </strong>
              </p>
              <p>
                <a href="mailto:info@airsyst.by">info@airsyst.by</a>
              </p>
              <p>
                <a href="https://airsyst.by">https://airsyst.by</a>
              </p>
            </div>
          </div>

          <div className="contacts-page__item">
            <div className="contacts-page__country">Республика Казахстан:</div>
            <div className="contacts-page__content">
              <p>ТОО “Энерготех”</p>
              <p>улица Коктал 111, Астана 010000, Казахстан</p>
              <p>
                <strong>
                  <a href="tel:+77026602047">+7 702 660 20 47</a>
                </strong>
              </p>
              <p>
                <a href="mailto:info@airsyst.kz">info@airsyst.kz</a>
              </p>
              <p>
                <a href="https://airsyst.kz">https://airsyst.kz</a>
              </p>
            </div>
          </div>
        </div>
        <a href="/" download="download" className="btn">
          Скачать “Реквизиты.pdf”
        </a>
      </section>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1wqfTcTr8k_Gh6o52IB5mKleVwvQDolw&amp;ehbc=2E312F"
        width="640"
        height="480"
      ></iframe>
    </main>
  );
}
