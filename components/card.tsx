import { CardInterface } from "@/utils/interface";
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

const Card = ({
  card,
  command,
  toggleFavourite,
}: {
  card: CardInterface;
  command: string;
  toggleFavourite: (id: string) => void;
}) => {
  return (
    <div
      className="relative w-full h-fit p-4 flex gap-4 rounded-xl transition-shadow duration-200 hover:shadow-lg group"
      style={{
        backgroundColor: "var(--card-background)",
        boxShadow: "0 4px 8px var(--cardbox-shadow)",
      }}
    >
      {/* Action Button (X or Add) */}
      {command === "rm" ? (
        <button
          onClick={() => toggleFavourite(card.id)}
          className="absolute top-2 right-2 text-4xl font-atma cursor-pointer font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto"
          style={{ color: "var(--leveltubevalue-background)" }}
        >
          ×
        </button>
      ) : command === "add" ? (
        <button
          onClick={() => toggleFavourite(card.id)}
          className="absolute top-2 right-2 text-2xl font-atma cursor-pointer font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto"
          style={{ color: "var(--leveltubevalue-background)" }}
        >
          Add
        </button>
      ) : null}

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
