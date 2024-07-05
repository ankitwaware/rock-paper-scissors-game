import { useRecoilValue } from "recoil";

import ScoreCard from "./components/ScoreCard";
import RulesBtn from "./components/RulesBtn";
import OptionGroup from "./components/OptionGrp";

import cardState from "./store/cardNameAtom";

// selected Card
import PaperCard from "./components/Cards/PaperCard";
import ScissorsCard from "./components/Cards/scissorsCard";
import RockCard from "./components/Cards/RockCard";

function App() {
  const name: string = useRecoilValue(cardState);

  return (
    <div className="h-screen bg-gradient-to-b from-[#1f3756] to-[#141539] uppercase">
      <div className="h-full flex flex-col items-center justify-between pt-6 pb-11">
        <ScoreCard />

        {name ? (
          <div className="border flex items-center justify-center gap-x-0">
            <div className="border flex flex-col justify-center items-center gap-y-2">
              {name === "paper" && <PaperCard />}
              {name === "scissors" && <ScissorsCard />}
              {name === "rock" && <RockCard />}
              <h3 className="text-sm font-semibold text-white ">You Picked</h3>
            </div>

            <div className="flex flex-col justify-center items-center gap-y-2">
              {name && randomCard(genrateRandomNumber())}
              <h3 className="text-sm font-semibold text-white ">
                The House Picked
              </h3>
            </div>
          </div>
        ) : (
          <OptionGroup />
        )}

        <RulesBtn />
      </div>
    </div>
  );
}

export default App;

function genrateRandomNumber() {
  // total random number
  const totalRandomNumber = 3;
  const randomNumber = Math.floor(Math.random() * totalRandomNumber + 1);
  console.log(randomNumber);
  return randomNumber;
}

function randomCard(randomNumber: number) {
  switch (randomNumber) {
    case 1:
      return <PaperCard />;
      break;
    case 2:
      return <ScissorsCard />;
      break;
    case 3:
      return <RockCard />;
      break;
    default:
      return <ScissorsCard />;
      break;
  }
}
