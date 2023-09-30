import Contacts from "./Contacts";
import Email from "./Email";
import WorkTime from "./WorkTime";

export default function Header() {
  return (
    <header className="header">
      <div className="wrap">
        <WorkTime />
        <Contacts
          title="Отдел продаж"
          phones={["+7 702 660 20 47", "+7 702 871 12 51"]}
        />
        <Contacts title="Отдел сервиса" phones={["+7 702 660 20 47"]} />
        <Email />
      </div>
    </header>
  );
}
