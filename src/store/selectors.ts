import { selector } from "recoil";

import { userCardState, randomCardState, userScoreState } from "./atoms";

// Rules
const winOrLooseState = selector({
  key: "result",
  get: ({ get }) => {
    const userPicked = get(userCardState);
    const housePicked = get(randomCardState);

    switch (userPicked) {
      case "paper":
        return housePicked == "scissor" ? "lose" : "win";
      case "scissor":
        return housePicked == "rock" ? "lose" : "win";
      case "rock":
        return housePicked == "paper" ? "lose" : "win";
      default:
        return "lose";
    }
  },
  set: ({ set }, newResultValue) => {
    set(userScoreState, (prevVal) => {
      if (newResultValue == "win") {
        return prevVal + 1;
      } else {
        return prevVal == 0 ? prevVal : prevVal - 1;
      }
    });
  },
});

export { winOrLooseState };
