import { useRecoilValue, useResetRecoilState } from "recoil";
import {
  userCardState,
  randomCardState,
  showRandomState,
  showResultState,
} from "../store/atoms";
import { winOrLooseState } from "../store/selectors";

export default function Result() {
  const finalResult = useRecoilValue(winOrLooseState);
  const resetUserCard = useResetRecoilState(userCardState);
  const resetrandomCard = useResetRecoilState(randomCardState);
  const resetshowRandomState = useResetRecoilState(showRandomState);
  const resetshowResultState = useResetRecoilState(showResultState);

  function onPlayAgain() {
    resetUserCard();
    resetrandomCard();
    resetshowRandomState();
    resetshowResultState();
  }

  return (
    <div className="flex flex-col gap-y-3 ">
      <h1 className="text-5xl md:text-6xl font-bold text-white">
        You {finalResult}
      </h1>
      <button
        className="bg-white p-2 text-sm md:text-xl rounded-md font-light"
        onClick={onPlayAgain}
      >
        PLAY AGAIN
      </button>
    </div>
  );
}
