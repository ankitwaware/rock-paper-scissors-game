interface SelectionCardProp {
  imgSrc: string;
  className?: string;
  color: string;
  cardname: string;
}

import { useRecoilState } from "recoil";
import cardState from "../store/cardNameAtom";

export default function SelectionCard({
  imgSrc,
  className,
  color,
  cardname,
}: SelectionCardProp) {
  const [name, setCardState] = useRecoilState(cardState);

  function onClickHander(e: any) {
    const selectedCard: HTMLButtonElement = e.target.closest("button");
    const cardname = selectedCard.dataset.cardname;
    if (!name) setCardState(cardname);
  }

  return (
    <button
      className={`size-24 p-2.5  rounded-full  bg-gradient-to-b ${color} ${className} ${
        name && "mt-0"
      }`}
      data-cardname={cardname}
      onClick={onClickHander}
    >
      <span className="size-full bg-white flex items-center justify-center rounded-full">
        <img className="size-9" src={imgSrc} alt="icon" />
      </span>
    </button>
  );
}
