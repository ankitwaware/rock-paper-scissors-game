import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import { randomCardState, showResultState } from "../../store/atoms";
import getCard, { cardnameType } from "../../utils/getCard";
import { winOrLooseState } from "../../store/selectors";

export default function RandomCard() {
  const [randomCard, setRandomcard] = useRecoilState(randomCardState);
  const setshowResultState = useSetRecoilState(showResultState);
  const [finalResult, setfinalResult] = useRecoilState(winOrLooseState);

  useEffect(() => {
    if (randomCard) {
      setTimeout(() => {
        setshowResultState(true);
        setfinalResult(finalResult);
      }, 500);
    }
    if (!randomCard) {
      // total random number
      const totalRandomNumber = 3;
      const randomNumber = Math.floor(Math.random() * totalRandomNumber + 1);

      switch (randomNumber) {
        case 1:
          setRandomcard("paper");
          break;
        case 2:
          setRandomcard("scissor");
          break;
        case 3:
          setRandomcard("rock");
          break;
        default:
          setRandomcard("rock");
      }
    }
  }, [
    randomCard,
    setshowResultState,
    setRandomcard,
    finalResult,
    setfinalResult,
  ]);

  return getCard(randomCard as cardnameType);
}
