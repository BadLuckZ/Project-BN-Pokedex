import { CardInterface } from "@/interface/interface";

export async function fetchCards(limit: number): Promise<CardInterface[]> {
  const res = await fetch(`/api/cards?limit=${limit}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch cards: ${res.status}`);
  }
  const data = await res.json();
  return data.cards ?? [];
}
