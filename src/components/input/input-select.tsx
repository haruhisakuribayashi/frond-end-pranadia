import React from "react";

type OptionType = {
  value: string;
  label: string;
};

type Props = {
  label: string;
  name: string;
  id: string;
  options: OptionType[];
  onChange?: (e: any) => void;
};

function InputSelect({ label, name, id, options, onChange }: Props) {
  return (
    <div className="flex flex-col w-full gap-2">
      <label className="text-sm font-medium">{label}</label>
      <select
        name={name}
        id={id}
        className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
        onChange={onChange}
      >
        {options.map((option: OptionType, index: number) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputSelect;
