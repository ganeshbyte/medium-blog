import { getAvatarIconName } from "../utility";

export const Avatar = ({
  author,
  size = 12,
}: {
  author: string;
  size: number;
}) => {
  return (
    <div
      className={`items-center justify-center w-${size} h-${size} bg-gray-400 px-2 rounded-full`}
    >
      <span className="text-xs font-medium text-gray-600 dark:text-gray-300 leading-none">
        {author ? getAvatarIconName(author) : getAvatarIconName("Anonymous")}
      </span>
    </div>
  );
};
