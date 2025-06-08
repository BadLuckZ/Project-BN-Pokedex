"use client";

import CardContainer from "@/components/cardcontainer";
import Popup from "@/components/popup";
import { sample_cards } from "@/mock/cards";
import { useState } from "react";

export default function CardsPage() {
  const [isShowPopup, setShowPopup] = useState(false);
  return (
    <div className="relative flex flex-col items-center w-full h-full">
      {isShowPopup && <Popup onClose={() => setShowPopup(false)} />}

      {/* Head */}
      <h1 className="text-4xl font-bold pt-4 font-atma">My Pokédex</h1>

      {/* Card Container */}
      <div className="grid grid-cols-2 gap-4 w-full h-full min-h-0 overflow-y-auto m-6">
        <CardContainer command={"rm"} cards={sample_cards} />
      </div>

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
