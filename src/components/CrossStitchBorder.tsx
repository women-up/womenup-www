const CrossStitchBorder = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`w-full h-1 ${className}`}
      style={{
        background: `repeating-linear-gradient(
          90deg,
          hsl(354 76% 44%) 0px,
          hsl(354 76% 44%) 4px,
          transparent 4px,
          transparent 8px
        )`,
      }}
    />
  );
};

export default CrossStitchBorder;
