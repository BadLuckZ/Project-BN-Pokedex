import { sample_cards } from "@/mock/cards";
import Image from "next/image";
import { useEffect, useState } from "react";
import CardContainer from "./cardcontainer";
import { CardInterface } from "@/utils/interface";

const Popup = ({ onClose }: { onClose: () => void }) => {
  const [query, setQuery] = useState("");
  const [filteredCards, setFilteredCards] =
    useState<CardInterface[]>(sample_cards);

  useEffect(() => {
    if (query) {
      setFilteredCards(
        sample_cards.filter((card) => {
          return card.name.toLowerCase().includes(query.toLowerCase());
        })
      );
    } else {
      setFilteredCards(sample_cards);
    }
  }, [query]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full min-h-screen"
      style={{ backgroundColor: "var(--modal-outside)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
          setQuery("");
        }
      }}
    >
      {/* Main Container */}
      <div
        className="min-w-fit w-[900px] h-[90%] rounded-xl shadow-lg flex flex-col"
        style={{
          backgroundColor: "var(--modal-contentbox-background)",
          boxShadow: `0 4px 10px var(--modal-contentbox-shadow)`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search */}
        <div className="relative flex items-center border rounded-lg px-2">
          <input
            type="text"
            className="w-full h-10 text-xl font-atma font-semibold
                       focus:outline-none focus:border-0"
            placeholder="Find pokemon"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value.trim());
            }}
          />
          <Image src={"/search.png"} alt="Search" width={24} height={24} />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 w-full overflow-y-auto">
          <CardContainer command="add" cards={filteredCards} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
