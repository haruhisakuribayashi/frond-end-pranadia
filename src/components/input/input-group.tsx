import React, { ChangeEventHandler } from "react";

type InputProps = {
  id?: string;
  name: string;
  label: string;
  placeholder?: string;
  type: string;
  value?: string;
  disable?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
};

function InputGroup({
  name,
  label,
  placeholder,
  id,
  type,
  value,
  disable,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        name={name}
        className="outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 "
        placeholder={placeholder}
        disabled={disable}
        onChange={onChange}
      />
    </div>
  );
}

export default InputGroup;
