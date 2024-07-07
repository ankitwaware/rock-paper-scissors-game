import { atom } from "recoil";

const selCardState = atom({
  key: "selCardName",
  default: "",
});

const randomCardState = atom({
  key: "randomCardName",
  default: "",
});

const userScoreState = atom({
  key: "score",
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
  selCardState,
  userScoreState,
  randomCardState,
  showRandomState,
  showResultState,
  showRulesState,
};
