import { CardInterface } from "@/utils/interface";
import Card from "./card";

const CardContainer = ({
  command,
  cards,
  toggleFavourite,
}: {
  command: string;
  cards: CardInterface[];
  toggleFavourite: (id: string) => void;
}) => {
  return (
    <>
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          command={command}
          toggleFavourite={toggleFavourite}
        />
      ))}
    </>
  );
};

export default CardContainer;
