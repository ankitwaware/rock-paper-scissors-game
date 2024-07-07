type ChooseCardProp = {
  imgSrc?: string;
  className?: string;
  color?: string;
  cardName?: string;
};

import { useRecoilState } from "recoil";
import { selCardState } from "../../store/atoms";

export default function ChooseCard({
  imgSrc,
  className,
  color,
  cardName,
}: ChooseCardProp) {
  const [selectedCardName, setSelCardName] = useRecoilState(selCardState);

  // set user Card
  function onBtnClickHander(event: React.MouseEvent<HTMLButtonElement>) {
    const selCardName = (event.target as HTMLButtonElement).closest("button");
    const userCardName = selCardName?.dataset.cardname as string;
    if (!selectedCardName) setSelCardName(userCardName);
  }

  return (
    <button
      className={`size-24 p-2.5  rounded-full  bg-gradient-to-b ${color} ${className}`}
      data-cardname={cardName}
      onClick={onBtnClickHander}
    >
      <span className="size-full bg-white flex items-center justify-center rounded-full">
        <img className="size-9" src={imgSrc} alt="icon" />
      </span>
    </button>
  );
}
