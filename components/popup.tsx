import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import CardContainer from "./cardcontainer";
import { CardInterface } from "@/utils/interface";
import { fetchCards } from "@/utils/function";
import CardContext from "@/context/cardcontext";

const Popup = ({ onClose }: { onClose: () => void }) => {
  const { favouriteCards, setNotFavouriteCards } = useContext(CardContext)!;

  const [query, setQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState<CardInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAndFilterCards = async () => {
      setIsLoading(true);
      try {
        const allCards = await fetchCards(query, "", 20);

        const favouriteIds = favouriteCards.map((card) => card.id);
        const availableCards = allCards.filter(
          (card: CardInterface) => !favouriteIds.includes(card.id)
        );

        setFilteredCards(availableCards);
        setNotFavouriteCards(availableCards);
      } catch (error) {
        setFilteredCards([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndFilterCards();
  }, [query, favouriteCards]);

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
      <div
        className="min-w-fit w-[900px] h-[90%] rounded-xl shadow-lg flex flex-col p-4"
        style={{
          backgroundColor: "var(--modal-contentbox-background)",
          boxShadow: `0 4px 10px var(--modal-contentbox-shadow)`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar */}
        <div className="relative flex items-center border rounded-lg px-2 m-4">
          <input
            type="text"
            className="w-full h-10 text-xl font-atma font-semibold focus:outline-none bg-transparent"
            placeholder="Find Pokémon"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Image src="/search.png" alt="Search" width={24} height={24} />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 w-full overflow-y-auto">
          {isLoading ? (
            <p className="text-center font-bold text-2xl font-gaegu">
              Loading...
            </p>
          ) : filteredCards.length === 0 ? (
            <p className="text-center font-bold text-2xl font-gaegu">
              No cards here...
            </p>
          ) : (
            <CardContainer command="add" cards={filteredCards} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
