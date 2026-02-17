const DiamondDivider = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-4 pt-8 pb-4 ${className}`}>
      <div className="flex-1 h-px bg-border/50" />
      <span className="text-primary/40 text-sm leading-none">◆</span>
      <div className="flex-1 h-px bg-border/50" />
    </div>
  );
};

export default DiamondDivider;
