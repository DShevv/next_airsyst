import cross from "@/public/img/icons/delete.svg";
import Image from "next/image";

interface Props {
  onClick?: () => void;
}

export default function DeleteSelected({ onClick }: Props) {
  return (
    <div className="shop-cart__delete-all" onClick={onClick}>
      <Image alt="" src={cross} width={27} height={27} />
      Удалить выбранное
    </div>
  );
}
