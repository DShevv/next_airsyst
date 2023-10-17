import bosters from "./boosters";
import coal from "./coal";
import disel from "./disel";
import med from "./mebium";
import res from "./res";
import vint from "./vint";
import ventbez from "./vintbez";
import vinwater from "./vintwater";
import voz from "./voz";

interface IData {
  id: string;
  title: string;
  price: string;
  art: string;
  image: string;
  link: string;
  weight: number;
  disabled?: boolean;
}

const data: IData[] = [
  ...voz,
  ...bosters,
  ...coal,
  ...disel,
  ...vint,
  ...med,
  ...ventbez,
  ...ventbez,
  ...res,
  ...vinwater,
];

export default data;
