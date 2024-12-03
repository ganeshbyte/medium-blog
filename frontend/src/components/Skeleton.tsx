export const Skeleton = () => {
  const lines = [
    { width: "w-48", height: "h-2.5", spacing: "mb-4" },
    { width: "max-w-[360px]", height: "h-2", spacing: "mb-2.5" },
    { width: "max-w-[330px]", height: "h-2", spacing: "mb-2.5" },
    { width: "max-w-[300px]", height: "h-2", spacing: "mb-2.5" },
    { width: "max-w-[360px]", height: "h-2", spacing: "mb-2.5" },
  ];

  return (
    <div role="status" className="max-w-sm animate-pulse mx-auto">
      {lines.map((line, idx) => (
        <SkeletonLine
          key={idx}
          width={line.width}
          height={line.height}
          spacing={line.spacing}
        />
      ))}
      <SkeletonLine width="w-48" height="h-2.5" spacing="mb-4" />
      {lines.map((line, idx) => (
        <SkeletonLine
          key={`repeat-${idx}`}
          width={line.width}
          height={line.height}
          spacing={line.spacing}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

const SkeletonLine = ({
  width,
  height,
  spacing,
}: {
  width: string;
  height: string;
  spacing: string;
}) => (
  <div
    className={`${height} bg-gray-200 rounded-full dark:bg-gray-700 ${width} ${spacing}`}
  ></div>
);
