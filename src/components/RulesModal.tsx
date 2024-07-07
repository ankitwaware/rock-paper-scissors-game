import { useSetRecoilState } from "recoil";
import { showRulesState } from "../store/atoms";

import closeIcon from "../assets/images/icon-close.svg";
import rulesIcon from "../assets/images/image-rules.svg";

export default function RulesModal() {
  const setShowRules = useSetRecoilState(showRulesState);

  return (
    <div className="bg-white text-black text-2xl h-screen flex flex-col justify-between items-center py-14">
      <h1 className="text-3xl font-bold text-[#2a46c0]">Rules</h1>

      <img src={rulesIcon} alt="close icon" />

      <button
        onClick={() => {
          console.log("close ");
          setShowRules(false);
        }}
      >
        <img src={closeIcon} alt="close icon" />
      </button>
    </div>
  );
}
