import CardContainer from "@/components/cardcontainer";

const cards = [
  {
    id: "ex8-98",
    name: "Deoxys ex",
    nationalPokedexNumber: 386,
    imageUrl: "https://images.pokemontcg.io/ex8/98.png",
    imageUrlHiRes: "https://images.pokemontcg.io/ex8/98_hires.png",
    supertype: "Pokémon",
    subtype: "EX",
    ability: {
      name: "Form Change",
      text: "Once during your turn (before your attack), you may search your deck for another Deoxys ex and switch it with Deoxys ex. (Any cards attached to Deoxys ex, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys ex on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change Poké-Power each turn.",
      type: "Poké-Power",
    },
    hp: "110",
    retreatCost: ["Colorless", "Colorless"],
    convertedRetreatCost: 2,
    number: "98",
    artist: "Mitsuhiro Arita",
    rarity: "Rare Holo EX",
    series: "EX",
    set: "Deoxys",
    setCode: "ex8",
    text: [
      "When Pokémon-ex has been Knocked Out, your opponent takes 2 Prize cards.",
    ],
    attacks: [
      {
        cost: ["Psychic", "Colorless", "Colorless"],
        name: "Psychic Burst",
        text: "You may discard 2 Energy attached to Deoxys ex. If you do, this attack does 50 damage plus 20 more damage for each Energy attached to the Defending Pokémon.",
        damage: "50+",
        convertedEnergyCost: 3,
      },
    ],
    weaknesses: [
      {
        type: "Psychic",
        value: "×2",
      },
    ],
    type: "Psychic",
  },
  {
    id: "dp6-90",
    name: "Cubone",
    nationalPokedexNumber: 104,
    imageUrl: "https://images.pokemontcg.io/dp6/90.png",
    imageUrlHiRes: "https://images.pokemontcg.io/dp6/90_hires.png",
    supertype: "Pokémon",
    subtype: "Basic",
    hp: "60",
    retreatCost: ["Colorless"],
    convertedRetreatCost: 1,
    number: "90",
    artist: "Kagemaru Himeno",
    rarity: "Common",
    series: "Diamond & Pearl",
    set: "Legends Awakened",
    setCode: "dp6",
    attacks: [
      {
        cost: ["Colorless"],
        name: "Headbutt",
        text: "",
        damage: "10",
        convertedEnergyCost: 1,
      },
      {
        cost: ["Fighting", "Colorless"],
        name: "Bonemerang",
        text: "Flip 2 coins. This attack does 20 damage times the number of heads.",
        damage: "20×",
        convertedEnergyCost: 2,
      },
    ],
    resistances: [
      {
        type: "Lightning",
        value: "-20",
      },
    ],
    weaknesses: [
      {
        type: "Water",
        value: "+10",
      },
    ],
    type: "Fighting",
  },
];

export default function CardsPage() {
  return (
    <div className="relative flex flex-col items-center gap-6 w-full h-full">
      {/* Head */}
      <h1 className="text-4xl font-bold pt-4 font-atma">My Pokédex</h1>

      {/* Card Container */}
      <CardContainer cards={cards} />

      {/* Add Button */}
      <div
        className="absolute w-full h-10 flex flex-grow justify-center mt-6 bottom-0"
        style={{ backgroundColor: "var(--add-button)" }}
      >
        <button
          className="text-white px-6 py-3 -mt-6 rounded-full text-4xl font-bold"
          style={{ backgroundColor: "var(--add-button)" }}
        >
          +
        </button>
      </div>
    </div>
  );
}
