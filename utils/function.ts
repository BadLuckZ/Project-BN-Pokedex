import { CardInterface } from "@/utils/interface";

export async function fetchCards(limit: number): Promise<CardInterface[]> {
  const res = await fetch(`/api/cards?limit=${limit}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch cards: ${res.status}`);
  }
  const data = await res.json();
  return data.cards ?? [];
}

export function calculateHealth(card: CardInterface) {
  const hp = card.hp ? parseInt(card.hp) : 0;
  return isNaN(hp) ? 0 : Math.min(100, hp);
}

export function calculateStrength(card: CardInterface) {
  const count = card.attacks ? card.attacks.length : 0;
  return Math.min(100, count * 50);
}

export function calculateWeakness(card: CardInterface) {
  const count = card.weaknesses ? card.weaknesses.length : 0;
  return Math.min(100, count * 100);
}

export function calculateDamage(card: CardInterface) {
  if (!card.attacks) return 0;

  return card.attacks.reduce((sum, attack) => {
    const number = parseInt(attack.damage);
    return sum + (isNaN(number) ? 0 : number);
  }, 0);
}

export function calculateHappiness(card: CardInterface) {
  const hpScore = calculateHealth(card) / 10;
  const damageScore = calculateDamage(card) / 10;
  const weaknessCount = card.weaknesses ? card.weaknesses.length : 0;

  const raw = (hpScore + damageScore + 10 - weaknessCount) / 5;

  return Math.max(0, Math.floor(raw));
}
