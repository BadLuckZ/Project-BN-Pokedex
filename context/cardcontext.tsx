import { createContext } from "react";
import { CardInterface } from "@/utils/interface";

interface CardContextType {
  favouriteCards: CardInterface[];
  notFavouriteCards: CardInterface[];
  toggleFavourite: (id: string) => void;
  setFavouriteCards: (cards: CardInterface[]) => void;
  setNotFavouriteCards: (cards: CardInterface[]) => void;
}

const CardContext = createContext<CardContextType | null>(null);

export default CardContext;
