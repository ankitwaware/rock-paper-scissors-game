import ChooseCard from "./chooseCard";
import rockIcon from "../../assets/images/icon-rock.svg";

export default function RockCard({ className }: { className?: string }) {
  return (
    <ChooseCard
      imgSrc={rockIcon}
      color="from-[#dc2e4e] to-[#dd405d]"
      className={className}
      cardName="rock"
    />
  );
}
