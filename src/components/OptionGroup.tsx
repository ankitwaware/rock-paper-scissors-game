import PaperCard from "./Cards/PaperCard";
import RockCard from "./Cards/RockCard";
import ScissorsCard from "./Cards/scissorsCard";

export default function OptionGroup() {
  return (
    <div className="bg-triangle lg:mt-20">
      <div className="w-full grid grid-cols-2 grid-rows-2 gap-x-10 lg:gap-x-28">
        <PaperCard className="justify-self-start mt-[-26px] lg:mt-[-56px]" />
        <ScissorsCard className="justify-self-end mt-[-26px] lg:mt-[-56px]" />
        <RockCard className="justify-self-center col-start-1 col-end-3" />
      </div>
    </div>
  );
}
