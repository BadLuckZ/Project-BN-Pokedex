"use client";

import { CardInterface } from "@/interface/interface";
import Card from "./card";

const CardContainer = ({ cards }: { cards: CardInterface[] }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4 h-full">
      {cards.map((card) => {
        return <Card key={card.id} cardName={card.name} />;
      })}
    </div>
  );
};
export default CardContainer;
