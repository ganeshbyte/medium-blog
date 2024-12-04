import type { MouseEventHandler } from "react";
import { Loader } from "./Loader";

interface ButtonWithLoaderProps {
  isLoading: boolean;
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
export const ButtonWithLoader = ({
  isLoading,
  label,
  onClick,
}: ButtonWithLoaderProps) => {
  return (
    <button
      type="button"
      className="flex items-center justify-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
      onClick={onClick}
    >
      <span className="text-sm mr-2">{label}</span>
      {isLoading && <Loader size="4" />}
    </button>
  );
};
