import React from "react";

export default function Button({
  children,
  type = "button",
  onClick,
  color = "blue",
}) {
  const colorVariants = {
    blue: "bg-blue-500 hover:bg-blue-600",
    red: "bg-red-500 hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${colorVariants[color]} text-white px-4 py-2 rounded`}
    >
      {children}
    </button>
  );
}
