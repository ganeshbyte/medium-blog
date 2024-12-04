import type { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface LabelledInputProps {
  id: string;
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
export const LabelledInput = ({
  label,
  id,
  placeholder,
  type,
  name,
  onChange,
}: LabelledInputProps) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </>
  );
};
