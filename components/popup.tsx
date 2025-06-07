const Popup = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "var(--modal-outside)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="w-[90%] max-w-md p-6 rounded-xl shadow-lg"
        style={{
          backgroundColor: "var(--modal-contentbox-background)",
          boxShadow: `0 4px 10px var(--modal-contentbox-shadow)`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4 font-atma">Add New Pokémon</h2>
      </div>
    </div>
  );
};

export default Popup;
