import { atom } from "recoil";

const cardState = atom({
  key: "selectedCard", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export default cardState;
