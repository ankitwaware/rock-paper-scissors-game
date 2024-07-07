import { useSetRecoilState } from "recoil";
import { showRulesState } from "../store/atoms";

export default function RulesBtn() {
  const setShowRules = useSetRecoilState(showRulesState);

  return (
    <button
      onClick={() => {
        console.log("open");
        setShowRules(true);
      }}
      className="border border-white rounded-md text-white text-sm  w-24 py-1"
    >
      Rules
    </button>
  );
}
