export default function ScoreCard() {
  return (
    <div className="border-2 border-[#606e85] rounded-lg  p-2 pl-4 w-4/5 md:w-2/5">
      <div className="flex justify-between items-center">
        <ul className="text-xl leading-4">
          <li>ROCK</li>
          <li>PAPER</li>
          <li>SCISSORS</li>
        </ul>

        <div className="size-16 bg-white rounded-md flex flex-col items-center justify-center">
          <span className="text-xs text-[#2a46c0]">SCORE</span>
          <span className="text-4xl font-bold text-[#3b4363]">12</span>
        </div>
      </div>
    </div>
  );
}
