import SelectionCard from "../SelectionCard";
import paperIcon from "../../assets/images/icon-paper.svg";

export default function PaperCard() {
  return (
    <SelectionCard
      imgSrc={paperIcon}
      color="from-[#4865f4] to-[#5671f5] mt-[-26px]"
      className="justify-self-start"
      cardname="paper"
    />
  );
}
