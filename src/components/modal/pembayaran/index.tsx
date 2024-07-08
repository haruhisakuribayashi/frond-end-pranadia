import React from "react";

function ModalPembayaran({
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
      } bg-black bg-opacity-30 items-center flex justify-center z-50 duration-75 transition-all`}
      onClick={onToggle}
      style={{
        transformOrigin: "bottom",
      }}
    >
      {children}
    </div>
  );
}

export default ModalPembayaran;
