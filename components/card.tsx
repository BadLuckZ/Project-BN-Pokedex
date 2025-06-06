import { CardInterface } from "@/interface/interface";
import {
  calculateDamage,
  calculateHappiness,
  calculateHealth,
  calculateStrength,
  calculateWeakness,
} from "@/utils/function";
import Image from "next/image";

const Card = ({ card }: { card: CardInterface }) => {
  return (
    <div
      className="w-full h-fit p-4 flex gap-4"
      style={{ backgroundColor: "var(--card-background)" }}
    >
      {/* Image */}
      <div className="w-[100px] h-full">
        <Image width={100} height={280} alt="Card Image" src={card.imageUrl} />
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-4">
        <h2>{card.name}</h2>
        <h3>HP: {calculateHealth(card)}</h3>
        <h3>STR: {calculateStrength(card)}</h3>
        <h3>WEAK: {calculateWeakness(card)}</h3>
        <h3>ATK: {calculateDamage(card)}</h3>
        <h3>{calculateHappiness(card)}</h3>
      </div>
    </div>
  );
};
export default Card;
