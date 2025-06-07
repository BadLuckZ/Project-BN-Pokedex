import Image from "next/image";

const HappinessBar = ({ currentNumber }: { currentNumber: number }) => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {Array.from({ length: currentNumber }).map((_, index) => (
        <Image
          key={index}
          alt={"Happiness Point"}
          width={32}
          height={32}
          src={"/cute.png"}
        />
      ))}
    </div>
  );
};

export default HappinessBar;
