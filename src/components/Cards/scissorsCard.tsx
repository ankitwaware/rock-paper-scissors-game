import SelectionCard from "../SelectionCard";
import scissorsIcon from "../../assets/images/icon-scissors.svg";

export default function ScissorsCard() {
  return (
    <SelectionCard
      imgSrc={scissorsIcon}
      color="from-[#ec9e0e] to-[#eca922] mt-[-26px]"
      className="justify-self-end"
      cardname="scissors"
    />
  );
}
