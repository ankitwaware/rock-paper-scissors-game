import PaperCard from "./Cards/PaperCard";
import RockCard from "./Cards/RockCard";
import ScissorsCard from "./Cards/scissorsCard";

export default function OptionGroup() {
  return (
    <div className="bg-[url('src/assets/images/bg-triangle.svg')] bg-contain bg-center bg-no-repeat">
      <div className="w-full grid grid-cols-2 grid-rows-2 gap-x-10">
        <PaperCard />
        <ScissorsCard />
        <RockCard />
      </div>
    </div>
  );
}
