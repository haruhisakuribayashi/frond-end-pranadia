import React from "react";

function Modal({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`fixed w-screen sm:w-[360px] left-[50%] -translate-x-[50%] inset-0 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } bg-black bg-opacity-30 items-end flex justify-center z-50 duration-75 transition-all`}
      onClick={onToggle}
      style={{
        transformOrigin: "bottom",
      }}
    >
      <div
        className={`bg-white rounded-t-lg shadow-lg relative w-screen sm:w-[360px] ${
          isOpen ? "bottom-0" : "-bottom-[50%]"
        } transition-all duration-500`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b-2">
          <h2 className="font-semibold text-sm">{title}</h2>
          <button onClick={onToggle} className="text-gray-700">
            &#10005;
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
