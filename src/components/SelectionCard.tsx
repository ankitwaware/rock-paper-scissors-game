interface SelectionCardProp {
  imgSrc: string;
  className?: string;
  color: string;
}

export default function SelectionCard({
  imgSrc,
  className,
  color,
}: SelectionCardProp) {
  return (
    <button
      className={`size-20 p-2 rounded-full  bg-gradient-to-b ${color} ${className}`}
    >
      <span className="size-full bg-white flex items-center justify-center   rounded-full">
        <img className="size-8" src={imgSrc} alt="icon" />
      </span>
    </button>
  );
}
