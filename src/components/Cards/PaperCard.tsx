import ChooseCard from "./chooseCard";
import paperIcon from "../../assets/images/icon-paper.svg";

export default function PaperCard({ className }: { className?: string }) {
  return (
    <ChooseCard
      imgSrc={paperIcon}
      color="from-[#4865f4] to-[#5671f5]"
      className={className}
      cardName="paper"
    />
  );
}
