import { useRecoilValue } from "recoil";
import { userScoreState } from "../store/atoms";

export default function Score() {
  const userScore = useRecoilValue(userScoreState);

  return (
    <div className="border-2 border-[#606e85] text-white font-semibold  rounded-lg  p-2 pl-4 w-4/5 md:w-2/5">
      <div className="flex justify-between items-center">
        <ul className="leading-4 md:text-3xl md:leading-6">
          <li>ROCK</li>
          <li>PAPER</li>
          <li>SCISSORS</li>
        </ul>

        <div className="h-16 w-20 md:h-20 md:w-28 bg-white rounded-md flex flex-col items-center justify-center">
          <span className="text-xs md:text-base  text-[#2a46c0]">Score</span>
          <span className="text-4xl md:text-5xl font-bold text-[#3b4363]">
            {userScore}
          </span>
        </div>
      </div>
    </div>
  );
}
