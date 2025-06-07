import { CardInterface } from "@/utils/interface";
import Card from "./card";

const CardContainer = ({
  command,
  cards,
}: {
  command: string;
  cards: CardInterface[];
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full h-full min-h-0 overflow-y-auto m-6">
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
};

export default CardContainer;
