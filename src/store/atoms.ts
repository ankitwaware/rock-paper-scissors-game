import { atom } from "recoil";

const userCardState = atom({
  key: "selCardName",
  default: "",
});

const randomCardState = atom({
  key: "randomCardName",
  default: "",
});

const userScoreState = atom({
  key: "Score",
  default: 0,
});

const showRandomState = atom({
  key: "showRandom",
  default: false,
});

const showResultState = atom({
  key: "showResult",
  default: false,
});

const showRulesState = atom({
  key: "showRules",
  default: false,
});

export {
  userCardState,
  userScoreState,
  randomCardState,
  showRandomState,
  showResultState,
  showRulesState,
};
