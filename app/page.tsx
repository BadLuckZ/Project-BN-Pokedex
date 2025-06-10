"use client";

import CardContext from "@/context/cardcontext";
import CardContainer from "@/components/cardcontainer";
import Popup from "@/components/popup";
import { CardInterface } from "@/utils/interface";
import { useState } from "react";

export default function CardsPage() {
  const [isShowPopup, setShowPopup] = useState(false);
  const [favouriteCards, setFavouriteCards] = useState<CardInterface[]>([]);
  const [notFavouriteCards, setNotFavouriteCards] = useState<CardInterface[]>(
    []
  );

  const toggleFavourite = (id: string) => {
    const isCurrentlyFav = favouriteCards.some((c) => c.id === id);

    if (isCurrentlyFav) {
      const cardToRemove = favouriteCards.find((c) => c.id === id);
      if (!cardToRemove) return;

      setFavouriteCards((prev) => prev.filter((c) => c.id !== id));
      setNotFavouriteCards((prev) => [
        ...prev,
        { ...cardToRemove, favourite: false },
      ]);
    } else {
      const cardToAdd = notFavouriteCards.find((c) => c.id === id);
      if (!cardToAdd) return;

      setNotFavouriteCards((prev) => prev.filter((c) => c.id !== id));
      setFavouriteCards((prev) => [...prev, { ...cardToAdd, favourite: true }]);
    }
  };

  return (
    <CardContext.Provider
      value={{
        favouriteCards,
        notFavouriteCards,
        setFavouriteCards,
        setNotFavouriteCards,
        toggleFavourite,
      }}
    >
      <div className="relative flex flex-col items-center w-full h-full">
        {isShowPopup && <Popup onClose={() => setShowPopup(false)} />}

        <h1 className="text-4xl font-bold pt-4 font-atma">My Pokédex</h1>

        {favouriteCards.length === 0 ? (
          <p className="text-center font-bold text-2xl font-gaegu m-6">
            You haven't added any cards to your favourite...
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-4 w-full h-fit min-h-0 overflow-y-auto m-6">
            <CardContainer command={"rm"} cards={favouriteCards} />
          </div>
        )}

        <div
          className="absolute w-full h-10 flex flex-grow justify-center mt-6 bottom-0 cursor-pointer"
          style={{ backgroundColor: "var(--add-button)" }}
          onClick={() => setShowPopup(true)}
        >
          <button
            className="text-white px-6 py-3 -mt-6 rounded-full text-4xl font-bold cursor-pointer"
            style={{ backgroundColor: "var(--add-button)" }}
            onClick={() => setShowPopup(true)}
          >
            +
          </button>
        </div>
      </div>
    </CardContext.Provider>
  );
}
