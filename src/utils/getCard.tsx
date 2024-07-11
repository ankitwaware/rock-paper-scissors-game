import PaperCard from "../components/Cards/PaperCard";
import RockCard from "../components/Cards/RockCard";
import ScissorsCard from "../components/Cards/scissorsCard";

export type cardnameType = "paper" | "scissor" | "rock";

export default function getCard(cardname: cardnameType) {
  switch (cardname) {
    case "paper":
      return <PaperCard  />;
    case "scissor":
      return <ScissorsCard />;
    case "rock":
      return <RockCard />;
    default:
      return <h2>Default card</h2>;
  }
}
