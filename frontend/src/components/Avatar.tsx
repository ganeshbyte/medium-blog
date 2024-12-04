import { getAvatarIconName } from "../utility";

interface AvatartProps {
  author: string;
  size: "small" | "big";
}

export const Avatar = ({ author, size }: AvatartProps) => {
  if (size === "big")
    return (
      <div
        className={`items-center justify-center w-${size} h-${size} bg-gray-400 px-4 py-2 rounded-full`}
      >
        <span className="text-xs font-medium text-gray-600  leading-none">
          {author ? getAvatarIconName(author) : getAvatarIconName("Anonymous")}
        </span>
      </div>
    );
  else {
    return (
      <div
        className={`items-center justify-center w-${size} h-${size} bg-gray-400 px-3 py-1 rounded-full`}
      >
        <span className="text-xs font-medium text-gray-600 leading-none">
          {author ? getAvatarIconName(author) : getAvatarIconName("Anonymous")}
        </span>
      </div>
    );
  }
};
