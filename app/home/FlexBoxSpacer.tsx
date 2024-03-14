export const FlexBoxSpacer = ({
  maxWidth,
  minWidth = 0,
  className = "",
}: {
  maxWidth: number;
  minWidth?: number;
  className?: string;
}) => {
  return (
    <div
      className={`invisible shrink-[1000] grow ${className}`}
      style={{ maxWidth: `${minWidth}px`, minWidth: `${minWidth}px` }}
    >
      FlexBoxSpacer
    </div>
  );
};
