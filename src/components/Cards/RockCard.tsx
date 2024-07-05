import SelectionCard from "../SelectionCard";
import rockIcon from "../../assets/images/icon-rock.svg"

export default function RockCard() {
  return (
    <SelectionCard
      imgSrc={rockIcon}
      color="from-[#dc2e4e] to-[#dd405d]"
      className="col-start-1 col-end-3 justify-self-center"
      cardname="rock"
    />
  );
}
