import { useState } from "react";
import { CardInterface } from "@/interface/interface";
import {
  calculateHappiness,
  calculateHealth,
  calculateStrength,
  calculateWeakness,
} from "@/utils/function";
import Image from "next/image";
import PowerBar from "./powerbar";
import HappinessBar from "./happinessbar";
import { MAX_HEALTH, MAX_STRENGTH, MAX_WEAKNESS } from "@/utils/const";

const Card = ({ card }: { card: CardInterface }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-fit p-4 flex gap-4 rounded-xl transition-shadow duration-200 hover:shadow-lg"
      style={{
        backgroundColor: "var(--card-background)",
        boxShadow: isHovered
          ? "0 6px 12px var(--cardbox-shadow-hover)"
          : "0 4px 8px var(--cardbox-shadow)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* X Button */}
      {isHovered && (
        <button
          className="absolute top-2 right-2 text-4xl font-atma font-bold cursor-pointer"
          onClick={() => console.log(`Remove ${card.name}`)}
          style={{ color: "var(--leveltubevalue-background)" }}
        >
          ×
        </button>
      )}

      {/* Image */}
      <Image
        width={200}
        height={280}
        alt="Card Image"
        src={card.imageUrl}
        className="rounded-md object-cover"
      />

      {/* Stats */}
      <div className="flex flex-col gap-3 w-full h-[200px]">
        <h2 className="text-xl font-atma font-medium">
          {card.name.toUpperCase()}
        </h2>
        <PowerBar
          label="hp"
          currentNumber={calculateHealth(card)}
          maxNumber={MAX_HEALTH}
        />
        <PowerBar
          label="str"
          currentNumber={calculateStrength(card)}
          maxNumber={MAX_STRENGTH}
        />
        <PowerBar
          label="weak"
          currentNumber={calculateWeakness(card)}
          maxNumber={MAX_WEAKNESS}
        />
        <HappinessBar currentNumber={calculateHappiness(card)} />
      </div>
    </div>
  );
};

export default Card;
