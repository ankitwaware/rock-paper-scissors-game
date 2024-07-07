import ChooseCard from "./chooseCard";
import scissorsIcon from "../../assets/images/icon-scissors.svg";

export default function ScissorsCard({ className }: { className?: string }) {
  return (
    <ChooseCard
      imgSrc={scissorsIcon}
      color="from-[#ec9e0e] to-[#eca922]"
      className={className}
      cardName="scissor"
    />
  );
}
