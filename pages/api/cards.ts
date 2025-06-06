import type { NextApiRequest, NextApiResponse } from "next";
import _ from "lodash";

import { cards } from "../../mock/cards.json";
import { CardInterface } from "@/interface/interface";

type Cards = {
  cards: CardInterface[];
};

export default function CardsHandler(
  req: NextApiRequest,
  res: NextApiResponse<Cards>
) {
  const { name, type, limit = "20" } = req.query;

  const limitNum = parseInt(limit as string, 10) || 20;

  if (_.every([name, type], (item) => !item)) {
    return res.status(200).json({ cards: cards.slice(0, limitNum) });
  }

  const filteredCards = _.filter(cards, (card) => {
    const nameQuery = _.toUpper((name as string) || "");
    const typeQuery = _.toUpper((type as string) || "");
    const cardName = _.toUpper(card.name);
    const cardType = _.toUpper(card.type);

    const checkName = _.includes(cardName, nameQuery);
    const checkType = _.includes(cardType, typeQuery);

    return checkName && checkType;
  });

  return res.status(200).json({ cards: filteredCards });
}
