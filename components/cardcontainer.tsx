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
    <>
      {cards.map((card) => {
        return <Card key={card.id} card={card} command={command} />;
      })}
    </>
  );
};

export default CardContainer;
