const PowerBar = ({
  label,
  currentNumber,
  maxNumber,
}: {
  label: string;
  currentNumber: number;
  maxNumber: number;
}) => {
  const percentage = (currentNumber / maxNumber) * 100;

  return (
    <div className="flex items-center gap-2 w-full h-4">
      <p className="w-12 text-sm font-atma font-bold">{label.toUpperCase()}</p>
      <div
        className="flex-1 h-full bg-gray-300 rounded-full overflow-hidden"
        style={{ backgroundColor: "var(--leveltube-background)" }}
      >
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${percentage}%`,
            backgroundColor: "var(--leveltubevalue-background)",
          }}
        />
      </div>
    </div>
  );
};
export default PowerBar;
