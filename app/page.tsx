import CardContainer from "@/components/cardcontainer";
import { sample_cards } from "@/mock/cards";

export default function CardsPage() {
  return (
    <div className="relative flex flex-col items-center w-full h-full">
      {/* Head */}
      <h1 className="text-4xl font-bold pt-4 font-atma">My Pokédex</h1>

      {/* Card Container */}
      <CardContainer command={"rm"} cards={sample_cards} />

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
