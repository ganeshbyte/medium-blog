export const Avatar = ({
  author,
  size = 8,
}: {
  author: string;
  size: number;
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-400 rounded-full dark:bg-gray-600`}
    >
      <span className="text-xs font-medium text-gray-600 dark:text-gray-300 leading-none">
        {author ? `${author}` : "G"}
      </span>
    </div>
  );
};
