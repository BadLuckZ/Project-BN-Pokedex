import { sample_cards } from "@/mock/cards";
import Image from "next/image";
import { useState } from "react";
import CardContainer from "./cardcontainer";

const Popup = ({ onClose }: { onClose: () => void }) => {
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    console.log(query);
  };

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
            onChange={(e) => {
              setQuery(e.target.value.toLowerCase());
            }}
          />
          <Image
            src={"/search.png"}
            alt="Search"
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={handleSearch}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 w-full h-full min-h-0 overflow-y-auto">
          <CardContainer command="add" cards={sample_cards} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
