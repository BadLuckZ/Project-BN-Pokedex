export interface AttackInterface {
  cost: string[];
  name: string;
  text: string;
  damage: string;
  convertedEnergyCost: number;
}

export interface ElementInterface {
  type: string;
  value: string;
}

export interface AbilityInterface {
  name: string;
  text: string;
  type: string;
}

export interface CardInterface {
  id: string;
  name: string;
  nationalPokedexNumber?: number;
  imageUrl: string;
  imageUrlHiRes: string;
  supertype: string;
  subtype?: string;
  ability?: AbilityInterface;
  evolvesFrom?: string;
  hp?: string;
  retreatCost?: string[];
  convertedRetreatCost?: number;
  number: string;
  artist: string;
  rarity: string;
  series: string;
  set: string;
  setCode: string;
  text?: string[];
  attacks?: AttackInterface[];
  resistances?: ElementInterface[];
  weaknesses?: ElementInterface[];
  type: string;
}
