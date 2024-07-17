import RandomCard from "./Cards/randomCard";
import EmptyCard from "./Cards/EmptyCard";
import { useRecoilValue } from "recoil";
import { showRandomState, userCardState } from "../store/atoms";
import getCard, { cardnameType } from "../utils/getCard";

export default function UserAndRamdomCard() {
  const showRandomCard = useRecoilValue(showRandomState);
  const userCardName = useRecoilValue(userCardState) as cardnameType;

  return (
    <div className="grid grid-cols-2  items-center justify-items-center gap-x-6 gap-y-3 md:gap-x-10 text-sm md:text-xl font-semibold text-white">
      {/* userSelected Card  */}
      {getCard(userCardName)}

      {showRandomCard ? <RandomCard /> : <EmptyCard />}

      <h3 className="lg:order-1">You Picked</h3>
      <h3 className="lg:order-2">The House Picked</h3>
    </div>
  )
}
