import { createPortal } from "react-dom";
import { useRecoilValue } from "recoil";
import { userCardState, showResultState, showRulesState } from "./store/atoms";
import { cardnameType } from "./utils/getCard";

import Score from "./components/Score";
import RulesBtn from "./components/RulesBtn";
import UserAndRamdomCard from "./components/userSelected";
import OptionGroup from "./components/OptionGroup";
import Result from "./components/Result";
import RulesModal from "./components/RulesModal";

const portalContainer = document.getElementById("modal") as HTMLElement;

function App() {
  const showRule = useRecoilValue(showRulesState);
  const showResultCard = useRecoilValue(showResultState);
  const userCardName = useRecoilValue(userCardState) as cardnameType;

  return (
    <div className="h-screen bg-gradient-to-b from-[#1f3756] to-[#141539]">
      <div className="h-dvh grid grid-cols-1 place-items-center lg:p-0 lg:pr-6 pt-6 pb-11">
        <Score />

        {userCardName ? <UserAndRamdomCard /> : <OptionGroup />}

        {showResultCard && <Result />}

        <RulesBtn />
      </div>

      {/* rules modal */}
      {showRule && createPortal(<RulesModal />, portalContainer)}
    </div>
  );
}

export default App;
