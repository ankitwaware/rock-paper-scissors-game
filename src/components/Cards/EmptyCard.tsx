import { useEffect } from "react";
import { showRandomState } from "../../store/atoms";
import { useSetRecoilState } from "recoil";

export default function EmptyCard() {
  const setshowRandomState = useSetRecoilState(showRandomState);

  useEffect(() => {
    setTimeout(() => {
      setshowRandomState(true);
    }, 500);
  }, [setshowRandomState]);

  return <button className="size-20 bg-[#3b4363] rounded-full" />;
}
