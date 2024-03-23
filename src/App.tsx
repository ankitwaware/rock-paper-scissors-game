import ScoreCard from "./components/ScoreCard";

import paperIcon from "./assets/images/icon-paper.svg";
import rockIcon from "./assets/images/icon-rock.svg";
import scissorsIcon from "./assets/images/icon-scissors.svg";
import SelectionCard from "./components/SelectionCard";

function App() {
  return (
    <div className="w-full h-screen bg-radial-custom grid grid-cols-1 items-center justify-items-center text-white text-2xl py-1 font-semibold">
      <ScoreCard />
      <Group />
    </div>
  );
}

export default App;

function Group() {
  return (
    <div className="bg-[url('src/assets/images/bg-triangle.svg')] bg-contain bg-center bg-no-repeat">
      <div className="grid grid-cols-2 grid-rows-2 gap-x-12">
        <SelectionCard
          imgSrc={paperIcon}
          color="from-[#ec9e0e] to-[#eca922] mt-[-26px]"
          className="justify-self-start"
        />
        <SelectionCard
          imgSrc={scissorsIcon}
          color="from-[#4865f4] to-[#5671f5] mt-[-26px]"
          className="justify-self-end"
        />
        <SelectionCard
          imgSrc={rockIcon}
          color="from-[#dc2e4e] to-[#dd405d]"
          className="col-start-1 col-end-3 justify-self-center"
        />
      </div>
    </div>
  );
}
