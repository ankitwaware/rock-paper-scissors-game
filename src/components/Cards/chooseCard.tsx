import { useRecoilState } from "recoil";
import { userCardState } from "../../store/atoms";
import { cardnameType } from "../../utils/getCard";

type ChooseCardProp = {
  imgSrc?: string;
  className?: string;
  color?: string;
  cardName?: string;
};

export default function ChooseCard({
  imgSrc,
  className,
  color,
  cardName,
}: ChooseCardProp) {
  const [selectedCardName, setSelCardName] = useRecoilState(userCardState);

  // set userCard
  function onBtnClickHander(event: React.MouseEvent<HTMLButtonElement>) {
    const selCardName = (event.target as HTMLButtonElement).closest("button");
    const userCardName = selCardName!.dataset.cardname as cardnameType;
    if (!selectedCardName) setSelCardName(userCardName);
  }

  return (
    <button
      className={`size-24 lg:size-40  p-3 lg:p-4 rounded-full  bg-gradient-to-b ${color} ${className} lg:order-3`}
      data-cardname={cardName}
      onClick={onBtnClickHander}
    >
      <span className="size-full bg-white flex items-center justify-center rounded-full">
        <img className="size-9 lg:size-20" src={imgSrc} alt="icon" />
      </span>
    </button>
  );
}
