"use client";

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
      // Move card from favouriteCards to notFavouriteCards
      const cardToRemove = favouriteCards.find((c) => c.id === id);
      if (!cardToRemove) {
        console.error(`Card with id ${id} not found in favouriteCards`);
        return;
      }

      setFavouriteCards((prev) => {
        const updated = prev.filter((c) => c.id !== id);
        return updated;
      });

      setNotFavouriteCards((prev: CardInterface[]) => {
        const updated = [...prev, { ...cardToRemove, favourite: false }];
        return updated;
      });
    } else {
      // Move card from notFavouriteCards to favouriteCards
      const cardToAdd = notFavouriteCards.find((c) => c.id === id);
      if (!cardToAdd) {
        console.error(`Card with id ${id} not found in notFavouriteCards`);
        return;
      }

      setNotFavouriteCards((prev) => {
        const updated = prev.filter((c) => c.id !== id);
        return updated;
      });

      setFavouriteCards((prev) => {
        const updated = [...prev, { ...cardToAdd, favourite: true }];
        return updated;
      });
    }
  };

  return (
    <div className="relative flex flex-col items-center w-full h-full">
      {isShowPopup && (
        <Popup
          favouriteCards={favouriteCards}
          setNotFavouriteCards={setNotFavouriteCards}
          toggleFavourite={toggleFavourite}
          onClose={() => setShowPopup(false)}
        />
      )}

      {/* Head */}
      <h1 className="text-4xl font-bold pt-4 font-atma">My Pokédex</h1>

      {/* Card Container */}
      {favouriteCards.length == 0 ? (
        <p className="text-center font-bold text-2xl font-gaegu m-6">
          You haven't added any cards to your favourite...
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 w-full h-fit min-h-0 overflow-y-auto m-6">
          <CardContainer
            command={"rm"}
            cards={favouriteCards}
            toggleFavourite={toggleFavourite}
          />
        </div>
      )}

      {/* Button */}
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
  );
}
