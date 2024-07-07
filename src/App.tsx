import { useRecoilValue } from "recoil";
import {
  selCardState,
  showRandomState,
  showResultState,
  showRulesState,
} from "./store/atoms";
// import { useState, useEffect } from "react";

import ScoreCard from "./components/ScoreCard";
import OptionGroup from "./components/OptionGrp";
import RulesBtn from "./components/RulesBtn";

import RandomCard from "./components/Cards/randomCard";
import EmptyCard from "./components/Cards/EmptyCard";
import Result from "./components/Result";

import getCard, { cardnameType } from "./utils/getCard";
import { createPortal } from "react-dom";
import RulesModal from "./components/RulesModal";

const portalContainer = document.getElementById("modal") as HTMLElement;

function App() {
  const showRule = useRecoilValue(showRulesState);
  const showRandomCard = useRecoilValue(showRandomState);
  const showResultCard = useRecoilValue(showResultState);
  const userCardName = useRecoilValue(selCardState) as cardnameType;

  return (
    <div className="h-screen bg-gradient-to-b from-[#1f3756] to-[#141539]">
      <div className="h-full flex flex-col items-center justify-between pt-6 pb-11">
        <ScoreCard />

        {userCardName ? (
          <>
            <div className="grid grid-cols-2  items-center justify-items-center gap-x-6 gap-y-3">
              <div>{getCard(userCardName)}</div>

              {showRandomCard ? <RandomCard /> : <EmptyCard />}

              <h3 className="text-sm font-semibold text-white">You Picked</h3>
              <h3 className="text-sm font-semibold text-white">
                The House Picked
              </h3>
            </div>
          </>
        ) : (
          <OptionGroup />
        )}

        {showResultCard && <Result />}

        <RulesBtn />
      </div>

      {showRule && createPortal(<RulesModal />, portalContainer)}
    </div>
  );
}

export default App;
