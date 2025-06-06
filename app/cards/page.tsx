"use client";

import { useEffect, useState } from "react";
import { CardInterface } from "@/interface/interface";
import { fetchCards } from "@/utils/function";

export default function CardsPage() {
  const [cards, setCards] = useState<CardInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCards(1)
      .then((cards) => {
        setCards(cards);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading cards...</p>;

  if (error) return <p>There's an error fetching Cards</p>;

  return (
    <div>
      {cards.map((card) => (
        <div key={card.id}>
          <img src={card.imageUrl} alt={card.name} style={{ width: "100%" }} />
          <h3>{card.name}</h3>
          <p>Type: {card.type}</p>
          <p>HP: {card.hp || "N/A"}</p>
        </div>
      ))}
    </div>
  );
}
