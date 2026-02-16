const DiamondDivider = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-4 py-6 ${className}`}>
      <div className="flex-1 h-px bg-border" />
      <span className="text-primary text-xl leading-none">◆</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
};

export default DiamondDivider;
